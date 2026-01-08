import {H1} from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";

export default function AboutPage() {
  return (
    <div className="container mx-auto p-6">
      <H1 >About Us</H1>
      <Paragraph className="mt-4">
        This is the About page. You can add more content and use reusable components like Heading
        and Paragraph here as well.
      </Paragraph>
    </div>
  );
}
