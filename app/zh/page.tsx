import HomePage from "@/components/HomePage";
import { chineseContent } from "@/data/zh";

export default function Page() {
  return <HomePage content={chineseContent} locale="zh" />;
}