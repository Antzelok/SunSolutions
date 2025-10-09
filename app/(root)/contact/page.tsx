"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

import { formSchema } from "@/lib/validators";
import { defaultFormValues } from "@/lib/constants";
import { FormData } from "@/types";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultFormValues,
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success("📬 Το μήνυμα στάλθηκε επιτυχώς!");
      form.reset(defaultFormValues);
    } catch (error) {
      console.error("Email error:", error);
      toast.error("Κάτι πήγε στραβά. Προσπαθήστε ξανά αργότερα.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center p-5">
          <h1 className="text-4xl font-bold text-orange-400 mb-6">
            Επικοινωνήστε μαζί μας
          </h1>
          <p className="text-lg mb-4">
            📍 Athens, Fedriadon 120, 113 64
          </p>
          <p className="text-lg mb-4">
            ✉️ info@sunsolutions.gr
          </p>
          <p className="text-lg mb-4">
            📞 +30 695 525 2876
          </p>
          <p className="text-gray-400 mt-6">
            Είμαστε εδώ για να σας βοηθήσουμε να βρείτε την ιδανική λύση
            ηλιακής ενέργειας για το σπίτι ή την επιχείρησή σας.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="m-5 p-5 bg-white/10 rounded-xl shadow-xl">
          <h1 className="text-3xl font-bold text-orange-400 text-shadow-xl mb-5">
            Επικοινωνία
          </h1>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-6"
            >
              {/* Όνομα */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold text-orange-300">
                      Όνομα
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Προσθέστε το όνομά σας"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              {/* Επώνυμο */}
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold text-orange-300">
                      Επώνυμο
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Προσθέστε το επώνυμό σας"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold text-orange-300">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Προσθέστε το email σας"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              {/* Κινητό Τηλέφωνο */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold text-orange-300">
                      Κινητό Τηλέφωνο
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="Προσθέστε το κινητό σας τηλέφωνο"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-400 hover:bg-orange-500 text-black font-semibold py-3 rounded-lg transition-all duration-200"
              >
                {loading ? "Αποστολή..." : "Ολοκλήρωση Αποστολής"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;