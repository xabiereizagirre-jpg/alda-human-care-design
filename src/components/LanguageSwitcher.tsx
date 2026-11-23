import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/translations";
import { cn } from "@/lib/utils";

const LANGUAGES: Language[] = ["es", "eu"];

const LanguageSwitcher = ({ className }: { className?: string }) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.nav.languageLabel}
      className={cn("inline-flex items-center rounded-full border border-primary/30 p-0.5", className)}
    >
      {LANGUAGES.map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLanguage(lang)}
          aria-pressed={language === lang}
          className={cn(
            "rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors",
            language === lang
              ? "bg-primary text-primary-foreground"
              : "text-primary hover:bg-accent/40"
          )}
        >
          {lang}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
