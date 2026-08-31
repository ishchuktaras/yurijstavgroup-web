// src/components/ContactForm.tsx

'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Nastavení pravidel pro validaci formuláře (Zod)
const formSchema = z.object({
  jmeno: z.string().min(2, { message: "Jméno musí mít alespoň 2 znaky." }),
  email: z.string().email({ message: "Zadejte platný e-mail, abychom vám mohli odpovědět." }),
  telefon: z.string().min(9, { message: "Zadejte platné telefonní číslo." }),
  sluzba: z.string().min(1, { message: "Prosím, vyberte o jakou službu máte zájem." }),
  zprava: z.string().min(10, { message: "Poptávka by měla obsahovat alespoň 10 znaků." }),
})

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jmeno: "",
      email: "",
      telefon: "",
      sluzba: "", // Přidána výchozí hodnota pro Select
      zprava: "",
    },
  })

  // Funkce, která se spustí po úspěšném vyplnění
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Zde později přidáme volání API pro odeslání PDF/DOCX na e-mail
    alert("Děkujeme za poptávku! (Zatím jen testovací režim)")
    form.reset()
  }

  return (
    <section id="poptavka" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-bg relative border-t border-brand-silver/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Levá část: Kontaktní údaje a mapa */}
          <div>
            <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-2">Kontakt</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pojďme váš projekt <br/> proměnit v realitu
            </h3>
            <p className="text-brand-silver/80 text-lg mb-10">
              Vyplňte formulář nebo nás kontaktujte napřímo. Ozveme se vám s nezávaznou nabídkou co nejdříve.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4 text-brand-silver">
                <div className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center border border-brand-silver/10">
                  <Phone className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <p className="text-sm text-brand-silver/60">Zavolejte nám</p>
                  <p className="text-lg font-bold text-white">+420 608 084 721</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-brand-silver">
                <div className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center border border-brand-silver/10">
                  <Mail className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <p className="text-sm text-brand-silver/60">Napište nám</p>
                  <p className="text-lg font-bold text-white">Yurijstavgroup@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-brand-silver">
                <div className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center border border-brand-silver/10">
                  <MapPin className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <p className="text-sm text-brand-silver/60">Sídlo firmy</p>
                  <p className="text-lg font-bold text-white">Fryčovická 458, Praha - Letňany</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pravá část: Formulář */}
          <div className="bg-brand-dark/50 border border-brand-silver/10 rounded-2xl p-8 backdrop-blur-sm">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="jmeno"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-silver">Jméno a příjmení</FormLabel>
                        <FormControl>
                          <Input placeholder="Jan Novák" className="bg-brand-bg border-brand-silver/20 text-white" {...field} />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="telefon"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-silver">Telefon</FormLabel>
                        <FormControl>
                          <Input placeholder="+420 123 456 789" className="bg-brand-bg border-brand-silver/20 text-white" {...field} />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-brand-silver">E-mail</FormLabel>
                      <FormControl>
                        <Input placeholder="jan.novak@email.cz" className="bg-brand-bg border-brand-silver/20 text-white" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="sluzba"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-brand-silver">O jakou službu máte zájem?</FormLabel>
                      {/* Změněno defaultValue na value */}
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-brand-bg border-brand-silver/20 text-white">
                            <SelectValue placeholder="Vyberte typ práce" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-brand-dark border-brand-silver/20 text-white">
                          <SelectItem value="stavby">Stavba na klíč</SelectItem>
                          <SelectItem value="rekonstrukce">Rekonstrukce</SelectItem>
                          <SelectItem value="fasady">Fasády a zateplení</SelectItem>
                          <SelectItem value="strechy">Střechy</SelectItem>
                          <SelectItem value="jine">Jiné / Konzultace</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="zprava"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-brand-silver">Detaily poptávky</FormLabel>
                      <FormControl>
                        {/* Změněno min-h-[120px] na min-h-30 */}
                        <Textarea 
                          placeholder="Přibližte nám svůj projekt (lokalita, termín, rozsah prací)..." 
                          className="min-h-30 bg-brand-bg border-brand-silver/20 text-white" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue-light text-white font-bold h-12 text-lg">
                  Odeslat nezávaznou poptávku
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </Form>
          </div>

        </div>
      </div>
    </section>
  )
}