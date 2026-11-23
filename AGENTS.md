# AGENTS.md

- All visible site copy lives in `src/i18n/translations.ts` (one typed object per language) and is read via `useLanguage()`; never hardcode copy in components, so every language stays complete and type-checked.
- Legal pages keep one content component per language (Spanish inline in the page, others in `src/pages/legal/`), because legal text is long-form prose that doesn't fit key/value strings.
