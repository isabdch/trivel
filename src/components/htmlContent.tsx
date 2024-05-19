// Libraries
import { sanitize } from "isomorphic-dompurify";

export const HtmlContent = ({ htmlString, className }: { htmlString: string, className?: string }) => {
  const sanitizedHtmlString = sanitize(htmlString);

  return <div className={className} dangerouslySetInnerHTML={{ __html: sanitizedHtmlString }} />;
};
