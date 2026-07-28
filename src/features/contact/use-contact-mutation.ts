"use client";

import { useMutation } from "@tanstack/react-query";

import { submitContact } from "./api";
import type { ContactFormValues, ContactResponse } from "./schema";

export function useContactMutation() {
  return useMutation<ContactResponse, Error, ContactFormValues>({
    mutationKey: ["contact", "submit"],
    mutationFn: submitContact,
  });
}
