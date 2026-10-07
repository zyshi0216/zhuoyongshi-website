import HomePage from "@/components/HomePage";
import { englishContent } from "@/data/en";

export default function Page() {
  return <HomePage content={englishContent} locale="en" />;
}