import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";

export default function AboutPage() {
  return (
    <div className="container mx-auto p-6">
      <Heading level={1}>About Us</Heading>
      <Paragraph className="mt-4">
        This is the About page. You can add more content and use reusable components like Heading
        and Paragraph here as well.
      </Paragraph>
    </div>
  );
}
