import { useApp } from "~/state/useApp";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Badge } from "../ui/badge";

export const GreetingHeader = ({lifestyleTags}: {
  lifestyleTags: Array<{ icon: string; label: string; description: string }>;
}) => {
  const { userName } = useApp();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className="mb-8">
      <h1 className="mb-2">
        {getGreeting()}, {userName} 👋
      </h1>
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-gray-600">Here's your spending overview for this month</p>
        {lifestyleTags.length > 0 && (
          <>
            <span className="text-gray-400">•</span>
            {lifestyleTags.map((tag, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Badge
                    variant="secondary"
                    className="px-2.5 py-0.5 bg-gray-100 hover:bg-gray-200 border-gray-200 cursor-help transition-colors"
                  >
                    <span className="mr-1">{tag.icon}</span>
                    {tag.label}
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tag.description}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
