import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const NAV_ITEMS = [
  { label: "Showcase", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#nexus" },
  { label: "Story", href: "#story" },
  { label: "Contact", href: "#contact" },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/vyzma-ai",
} as const;

export const SOCIAL_LINKS = [
  {
    href: "https://github.com/vyzma-ai",
    icon: FaGithub,
  },
  {
    href: "https://x.com/vyzma_ai",
    icon: FaXTwitter,
  },
  {
    href: "https://linkedin.com/company/vyzma-ai",
    icon: FaLinkedin,
  },
  {
    href: "https://discord.gg/vyzma-ai",
    icon: FaDiscord,
  },
] as const;

export const VIDEO_LINKS = {
  feature1:
    "https://93w95scdts.ufs.sh/f/AOfILeWJzqCc56aV03LYRyJDZsOPGdFTt0lQuHLkeqjKCao1",
  feature2:
    "https://93w95scdts.ufs.sh/f/AOfILeWJzqCclcn5JiTo8NUtBfpgkOmXZ2CT3DjMr19Yqlac",
  feature3:
    "https://93w95scdts.ufs.sh/f/AOfILeWJzqCcbZvH6O7fXDrfMZ6S457EQsgoxTCIz1kjlnVd",
  feature4:
    "https://93w95scdts.ufs.sh/f/AOfILeWJzqCcSrGHFCyiMbxBtTacUmFzn4dZpwVYNfvR6WLg",
  feature5:
    "https://93w95scdts.ufs.sh/f/AOfILeWJzqCc1qT68sSEu6tgkCBNP3FH45AUe70hrbTaxYDm",
  hero1: "/videos/vyzma-hero-1.mp4",
  hero2:
    "https://93w95scdts.ufs.sh/f/AOfILeWJzqCcLjP2Y7QEQuN5THDwzeBx4OvmaFZjP6ysCKk3",
  hero3:
    "https://93w95scdts.ufs.sh/f/AOfILeWJzqCcpmpmzmuj1IHWSEokgRuN2hMcUpBq0xQery3i",
  hero4:
    "https://93w95scdts.ufs.sh/f/AOfILeWJzqCcpB0GHsouj1IHWSEokgRuN2hMcUpBq0xQery3",
};
