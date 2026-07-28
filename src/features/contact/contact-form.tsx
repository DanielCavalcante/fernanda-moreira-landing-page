"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  PERIOD_OPTIONS,
  PRACTICE_AREA_OPTIONS,
  contactSchema,
  type ContactFormValues,
} from "./schema";
import { useContactMutation } from "./use-contact-mutation";

const todayISO = () => new Date().toISOString().split("T")[0];

export function ContactForm() {
  const mutation = useContactMutation();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      area: undefined,
      preferredDate: "",
      preferredPeriod: undefined,
      message: "",
      company: "",
      consent: false as unknown as true,
    },
  });

  function onSubmit(values: ContactFormValues) {
    mutation.mutate(values, {
      onSuccess: (data) => {
        toast.success("Solicitação enviada!", {
          description: data.protocol
            ? `Protocolo ${data.protocol}. Retornaremos em breve.`
            : "Retornaremos em breve pelo canal informado.",
        });
        form.reset();
      },
      onError: (error) => {
        toast.error("Algo deu errado", { description: error.message });
      },
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
        {/* Honeypot — visually hidden, ignored by users */}
        <div className="sr-only" aria-hidden="true">
          <label htmlFor="company">Empresa</label>
          <input
            id="company"
            tabIndex={-1}
            autoComplete="off"
            {...form.register("company")}
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome completo</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome" autoComplete="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="voce@email.com"
                    autoComplete="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>WhatsApp / Telefone</FormLabel>
                <FormControl>
                  <Input
                    placeholder="(83) 99999-9999"
                    autoComplete="tel"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="area"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Área de atuação</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {PRACTICE_AREA_OPTIONS.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="preferredDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Data preferida</FormLabel>
                <FormControl>
                  <Input type="date" min={todayISO()} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="preferredPeriod"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Período</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {PERIOD_OPTIONS.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descreva seu caso</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Conte brevemente o contexto e o que você precisa."
                  rows={5}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem>
              <label className="flex cursor-pointer items-start gap-3">
                <FormControl>
                  <input
                    type="checkbox"
                    className="mt-1 size-4 shrink-0 accent-[var(--color-gold)]"
                    checked={field.value === true}
                    onChange={(event) => field.onChange(event.target.checked)}
                  />
                </FormControl>
                <span className="text-sm leading-relaxed text-muted-foreground">
                  Autorizo o contato e o tratamento dos meus dados para fins de
                  agendamento, conforme a LGPD.
                </span>
              </label>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          className="w-full sm:w-auto"
          disabled={mutation.isPending}
        >
          {mutation.isPending && <Loader2 className="animate-spin" />}
          {mutation.isPending ? "Enviando..." : "Solicitar agendamento"}
        </Button>
      </form>
    </Form>
  );
}
