const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '..', 'src', 'lib', 'blog-data.ts');

function findClosingBracket(content, startIdx) {
  let depth = 1;
  for (let i = startIdx; i < content.length; i++) {
    if (content[i] === '[') depth++;
    if (content[i] === ']') depth--;
    if (depth === 0) return i;
  }
  return -1;
}

function main() {
  let content = fs.readFileSync(FILE, 'utf-8').replace(/\r\n/g, '\n');

  // Find BLOG_POSTS
  const POSTS_DECL = 'export const BLOG_POSTS: BlogPost[] = [';
  const postsDeclStart = content.indexOf(POSTS_DECL);
  if (postsDeclStart === -1) { console.log('BLOG_POSTS not found'); process.exit(1); }

  const postsBracketStart = postsDeclStart + POSTS_DECL.length;
  const postsCloseBracket = findClosingBracket(content, postsBracketStart);
  if (postsCloseBracket === -1) { console.log('Could not find end of BLOG_POSTS'); process.exit(1); }

  // The BLOG_POSTS array ends at postsCloseBracket (the `]`)
  // Then there's `];` — the `;` at postsCloseBracket + 1

  // Find BLOG_QUEUE
  const QUEUE_DECL = 'export const BLOG_QUEUE: BlogPost[] = [';
  const queueDeclStart = content.indexOf(QUEUE_DECL);
  if (queueDeclStart === -1) { console.log('BLOG_QUEUE not found. Nothing to publish.'); process.exit(0); }

  const queueBracketStart = queueDeclStart + QUEUE_DECL.length;
  const queueCloseBracket = findClosingBracket(content, queueBracketStart);
  if (queueCloseBracket === -1) { console.log('Could not find end of BLOG_QUEUE'); process.exit(1); }

  // Queue content between [ and ]
  const queueInner = content.slice(queueBracketStart, queueCloseBracket).trim();
  if (!queueInner) { console.log('BLOG_QUEUE is empty. All blogs published.'); process.exit(0); }

  // Extract first entry (between { and matching })
  const firstBrace = queueInner.indexOf('{');
  if (firstBrace === -1) { console.log('Could not find entry in BLOG_QUEUE.'); process.exit(1); }

  let depth = 0;
  let entryEnd = firstBrace;
  for (let i = firstBrace; i < queueInner.length; i++) {
    if (queueInner[i] === '{') depth++;
    if (queueInner[i] === '}') depth--;
    if (depth === 0) { entryEnd = i + 1; break; }
  }

  const entry = queueInner.slice(firstBrace, entryEnd);
  const remaining = queueInner.slice(entryEnd).trim();

  // Update date
  const today = new Date().toISOString().split('T')[0];
  const updatedEntry = entry.replace(/date: "2099-01-01"/g, `date: "${today}"`);
  const slugMatch = entry.match(/slug: "(.+?)"/);
  const slug = slugMatch ? slugMatch[1] : 'unknown';

  // Build new queue (remove first entry + trailing comma)
  const newQueueInner = remaining.startsWith(',') ? remaining.slice(1).trim() : remaining;

  // Insert entry into BLOG_POSTS
  // Replace `\n];` at end of BLOG_POSTS with `,\nENTRY\n];`
  const postsEndWithSemi = postsCloseBracket + 1; // position of `;`
  const insertion = `,\n${updatedEntry}\n]`;
  let newContent = content.slice(0, postsCloseBracket) + insertion + content.slice(postsEndWithSemi);

  // Replace old BLOG_QUEUE with new one
  const oldQueueSection = content.slice(queueDeclStart, queueCloseBracket + 1); // includes `]` but not `;`
  const newQueueSection = newQueueInner
    ? `${QUEUE_DECL}\n${newQueueInner}\n]`
    : `${QUEUE_DECL}\n]`;

  // The `;` after BLOG_QUEUE closing `]` stays in place
  newContent = newContent.replace(oldQueueSection, newQueueSection);

  fs.writeFileSync(FILE, newContent, 'utf-8');
  console.log(`Published "${slug}" with date ${today}. Remaining: ${newQueueInner ? 'yes' : 'no'}`);
}

try { main(); }
catch (e) { console.error('Scheduler error:', e.message); process.exit(1); }
