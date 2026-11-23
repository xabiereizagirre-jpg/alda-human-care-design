import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/i18n/LanguageContext";

const EMAILJS_SERVICE_ID = "service_y39a8b8";
const EMAILJS_TEMPLATE_ID = "template_96q8i8o";
const EMAILJS_PUBLIC_KEY = "lnko6JvFsggW4H93C";
const RECAPTCHA_SITE_KEY = "6LcdWC0sAAAAALXvQGfMYZSnVgUsake5c2J23-kE";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const { toast } = useToast();
  const { t, language } = useLanguage();

  // The captcha widget is re-rendered in the new language, so it must be solved again.
  useEffect(() => {
    setCaptchaVerified(false);
  }, [language]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          organization: formData.organization,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: t.contact.successTitle,
        description: t.contact.successDescription,
      });
      setFormData({ name: "", email: "", organization: "", message: "" });
      setCaptchaVerified(false);
      recaptchaRef.current?.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: t.contact.errorTitle,
        description: t.contact.errorDescription,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            {t.contact.title}
          </h2>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
              {t.contact.imagineTitle}
            </h3>
            <p className="text-lg text-foreground leading-relaxed">
              {t.contact.imagineText}
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{t.contact.formTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t.contact.nameLabel}</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder={t.contact.namePlaceholder}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t.contact.emailLabel}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder={t.contact.emailPlaceholder}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization">{t.contact.organizationLabel}</Label>
                    <Input
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder={t.contact.organizationPlaceholder}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t.contact.messageLabel}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder={t.contact.messagePlaceholder}
                    />
                  </div>

                  <div className="flex justify-center">
                    <ReCAPTCHA
                      key={language}
                      ref={recaptchaRef}
                      hl={language}
                      sitekey={RECAPTCHA_SITE_KEY}
                      onChange={(value) => setCaptchaVerified(!!value)}
                      onExpired={() => setCaptchaVerified(false)}
                    />
                  </div>

                  <Button type="submit" variant="gradient" className="w-full" size="lg" disabled={isSubmitting || !captchaVerified}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        {t.contact.sending}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        {t.contact.send}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{t.contact.infoTitle}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                     <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">{t.contact.infoEmail}</p>
                      <p className="text-muted-foreground">info@alda2u.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                     <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">{t.contact.infoLocation}</p>
                      <p className="text-muted-foreground">{t.contact.infoLocationValue}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    {t.contact.readyTitle}
                  </h3>
                  <p className="text-foreground leading-relaxed mb-6">
                    {t.contact.readyText}
                  </p>
                  <div className="space-y-2">
                    {t.contact.readyPoints.map((point, index) => (
                      <p key={index} className="text-sm text-muted-foreground">• {point}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;