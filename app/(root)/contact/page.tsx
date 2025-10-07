"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!formRef.current) return;

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success("📬 Το μήνυμα στάλθηκε επιτυχώς!");
      formRef.current.reset();
    } catch (error) {
      console.error("Email error:", error);
      toast.error("Κάτι πήγε στραβά. Προσπαθήστε ξανά αργότερα.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] text-white">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/10">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-orange-400 mb-8 drop-shadow">
          Επικοινωνία
        </h1>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <div>
            <Label htmlFor="name" className="text-lg font-semibold text-orange-300">
              Όνομα
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Προσθέστε το όνομά σας"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
          </div>

          <div>
            <Label htmlFor="lastName" className="text-lg font-semibold text-orange-300">
              Επώνυμο
            </Label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              required
              placeholder="Προσθέστε το επώνυμό σας"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-lg font-semibold text-orange-300">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Προσθέστε το email σας"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-lg font-semibold text-orange-300">
              Κινητό Τηλέφωνο
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="Προσθέστε το κινητό σας τηλέφωνο"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-400 hover:bg-orange-500 text-black font-semibold py-3 rounded-lg transition-all duration-200"
          >
            {loading ? "Αποστολή..." : "Ολοκλήρωση Αποστολής"}
          </Button>
        </form>
      </div>
    </main>
  );
};

export default ContactPage;