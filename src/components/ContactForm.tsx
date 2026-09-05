// src/components/ContactForm.tsx
'use client'

import { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { MapPin, Phone, Mail, ArrowRight, UploadCloud } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const formSchema = z.object({
  jmeno: z.string().min(2, { message: "Jméno musí mít alespoň 2 znaky." }),
  telefon: z.string().min(9, { message: "Zadejte platné telefonní číslo." }),
  adresa: z.string().min(5, { message: "Zadejte přesnou adresu realizace." }),
  sluzba: z.string().min(1, { message: "Vyberte typ práce." }),
  plocha: z.string().optional(),
  termin: z.string().optional(),
  zprava: z.string().optional(),
})

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [fileName, setFileName] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jmeno: "", telefon: "", adresa: "", sluzba: "", plocha: "", termin: "", zprava: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setStatus('loading')
    const formData = new FormData()
    Object.entries(values).forEach(([key, value]) => {
      if (value) formData.append(key, value)
    })

    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement
    if (fileInput && fileInput.files && fileInput.files[0]) {
      formData.append('file', fileInput.files[0])
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData, 
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
        setFileName(null)
      } else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="poptavka" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-bg relative border-t border-brand-silver/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <div>
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-2">Kontakt</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Pojďme váš projekt <br/> proměnit v realitu</h3>
          <p className="text-brand-silver/80 text-lg mb-10">Vyplňte formulář níže nebo nás kontaktujte napřímo. Ozveme se vám s nabídkou co nejdříve.</p>

          <div className="space-y-8 mb-10">
            <div className="flex items-center gap-4 text-brand-silver">
              <div className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center border border-brand-silver/10 shrink-0"><Phone className="w-5 h-5 text-brand-blue" /></div>
              <div><p className="text-sm text-brand-silver/60">Zavolejte nám</p><p className="text-lg font-bold text-white">+420 608 084 721</p></div>
            </div>
            
            <div className="flex items-center gap-4 text-brand-silver">
              <div className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center border border-brand-silver/10 shrink-0"><Mail className="w-5 h-5 text-brand-blue" /></div>
              <div><p className="text-sm text-brand-silver/60">Napište nám</p><p className="text-lg font-bold text-white">info@yurijstavgroup.cz</p></div>
            </div>
            
            {/* Upravená sekce s adresou a upozorněním */}
            <div className="flex items-start gap-4 text-brand-silver">
              <div className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center border border-brand-silver/10 shrink-0 mt-1"><MapPin className="w-5 h-5 text-brand-blue" /></div>
              <div>
                <p className="text-sm text-brand-silver/60">Administrativní sídlo</p>
                <p className="text-lg font-bold text-white mb-1">Fryčovická 458, Praha - Letňany</p>
                <div className="bg-brand-blue/10 border border-brand-blue/20 rounded-md p-3 mt-3 max-w-sm">
                  <p className="text-sm font-bold text-brand-blue mb-1">Působíme po celé ČR</p>
                  <p className="text-xs text-brand-silver/80 leading-relaxed">
                    Tato adresa slouží jako naše administrativní zázemí. Za vaším projektem s radostí přijedeme kamkoliv, kde nás budete potřebovat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pravá část - Nový formulář */}
        <div className="bg-brand-dark/50 border border-brand-silver/10 rounded-2xl p-8 backdrop-blur-sm">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-4">✓</div>
              <h4 className="text-2xl font-bold text-white">Děkujeme za poptávku!</h4>
              <p className="text-brand-silver">Vaše údaje i fotografie jsme v pořádku přijali. Brzy se vám ozveme zpět.</p>
              <Button onClick={() => setStatus('idle')} variant="outline" className="mt-8 text-black">Odeslat další</Button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField control={form.control} name="jmeno" render={({ field }) => (
                    <FormItem><FormLabel className="text-brand-silver">Jméno a příjmení *</FormLabel><FormControl><Input className="bg-brand-bg border-brand-silver/20 text-white" {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                  )}/>
                  <FormField control={form.control} name="telefon" render={({ field }) => (
                    <FormItem><FormLabel className="text-brand-silver">Telefon *</FormLabel><FormControl><Input className="bg-brand-bg border-brand-silver/20 text-white" {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                  )}/>
                </div>

                <FormField control={form.control} name="adresa" render={({ field }) => (
                  <FormItem><FormLabel className="text-brand-silver">Přesná adresa realizace *</FormLabel><FormControl><Input className="bg-brand-bg border-brand-silver/20 text-white" {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                )}/>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField control={form.control} name="sluzba" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-brand-silver">Typ požadované práce *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl><SelectTrigger className="bg-brand-bg border-brand-silver/20 text-white"><SelectValue placeholder="Vyberte typ práce" /></SelectTrigger></FormControl>
                        <SelectContent className="bg-brand-dark border-brand-silver/20 text-white">
                          <SelectItem value="Stavby na klíč">Stavba na klíč</SelectItem>
                          <SelectItem value="Rekonstrukce">Rekonstrukce</SelectItem>
                          <SelectItem value="Fasády">Fasády a zateplení</SelectItem>
                          <SelectItem value="Střechy">Střechy</SelectItem>
                          <SelectItem value="Jiné">Jiné / Konzultace</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}/>
                  <FormField control={form.control} name="plocha" render={({ field }) => (
                    <FormItem><FormLabel className="text-brand-silver">Přibližná plocha (m²)</FormLabel><FormControl><Input type="number" placeholder="Např. 120" className="bg-brand-bg border-brand-silver/20 text-white" {...field} /></FormControl></FormItem>
                  )}/>
                </div>

                <FormField control={form.control} name="termin" render={({ field }) => (
                  <FormItem><FormLabel className="text-brand-silver">Požadovaný termín realizace</FormLabel><FormControl><Input placeholder="Např. Jaro 2027, co nejdříve..." className="bg-brand-bg border-brand-silver/20 text-white" {...field} /></FormControl></FormItem>
                )}/>

                <div className="pt-2">
                  <FormLabel className="text-brand-silver block mb-2">Aktuální stav (nahrát fotku)</FormLabel>
                  <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-brand-silver/20 border-dashed rounded-lg cursor-pointer bg-brand-bg hover:bg-brand-silver/5 transition-colors">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <UploadCloud className="w-6 h-6 text-brand-blue mb-2" />
                      <p className="text-sm text-brand-silver/60">{fileName ? fileName : "Klikněte pro nahrání fotografie (JPG, PNG)"}</p>
                    </div>
                    <input type="file" className="hidden" accept="image/*" onChange={(e) => setFileName(e.target.files?.[0]?.name || null)} />
                  </label>
                </div>

                <FormField control={form.control} name="zprava" render={({ field }) => (
                  <FormItem><FormLabel className="text-brand-silver">Doplňující informace</FormLabel><FormControl><Textarea className="min-h-24 bg-brand-bg border-brand-silver/20 text-white" {...field} /></FormControl></FormItem>
                )}/>

                {status === 'error' && <p className="text-red-400 text-sm text-center">Něco se pokazilo, zkuste to prosím znovu.</p>}

                <Button type="submit" disabled={status === 'loading'} className="w-full bg-brand-blue hover:bg-brand-blue-light text-white font-bold h-12 text-lg">
                  {status === 'loading' ? 'Odesílám...' : 'Odeslat nezávaznou poptávku'} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </Form>
          )}
        </div>

      </div>
    </section>
  )
}