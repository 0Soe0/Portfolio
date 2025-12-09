import { StarBackground } from "components/StarBackground";
import { NotFoundPage } from "components/NotFoundPage";

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarBackground />
      <main>
        <NotFoundPage />
      </main>
    </div>
  );
};
