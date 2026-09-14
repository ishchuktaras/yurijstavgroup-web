// src/components/ContactForm.tsx
'use client'

import { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { MapPin, Phone, Mail, ArrowRight, UploadCloud } from "lucide-react"

// Náš nový plynulý animovaný úspěch
import SuccessCheckmark from '@/components/SuccessCheckmark'

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

const formSchema = z.object({
  jmeno: z.string().min(2, { message: "Jméno musí mít alespoň 2 znaky." }),
  email: z.string().email({ message: "Zadejte platný e-mail." }),
  telefon: z.string().min(9, { message: "Zadejte platné telefonní číslo." }),
  adresa: z.string().min(5, { message: "Zadejte přesnou adresu realizace." }),
  sluzba: z.string().min(1, { message: "Vyberte typ práce." }),
  plocha: z.string().optional(),
  termin: z.string().optional(),
  zprava: z.string().optional(),
  souhlas: z.boolean().refine(val => val === true, {
    message: "Pro odeslání poptávky je nutný souhlas se zpracováním údajů.",
  }),
})

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [fileName, setFileName] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jmeno: "", email: "", telefon: "", adresa: "", sluzba: "", plocha: "", termin: "", zprava: "", souhlas: false,
    },
  })

  // Sledování, zda je souhlas zaškrtnutý (pro aktivaci tlačítka)
  const souhlasChecked = form.watch("souhlas")

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setStatus('loading')
    const formData = new FormData()
    Object.entries(values).forEach(([key, value]) => {
      if (value !== undefined && key !== 'souhlas') formData.append(key, String(value))
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
    <section id="poptavka" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-bg relative border-t border-brand-silver/10 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        
        <div>
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-2">Kontakt</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Pojďme váš projekt <br/> proměnit v realitu</h3>
          <p className="text-brand-silver/80 text-lg mb-10">Vyplňte formulář níže nebo nás kontaktujte napřímo. Ozveme se vám s nabídkou co nejdříve.</p>

          <div className="space-y-8 mb-10">
            <div className="flex items-center gap-4 text-brand-silver group">
              <div className="w-14 h-14 rounded-2xl bg-brand-dark flex items-center justify-center border border-brand-silver/10 shrink-0 group-hover:border-brand-blue/30 transition-colors"><Phone className="w-6 h-6 text-brand-blue" /></div>
              <div><p className="text-sm text-brand-silver/60">Zavolejte nám</p><p className="text-xl font-bold text-white">+420 608 084 721</p></div>
            </div>
            
            <div className="flex items-center gap-4 text-brand-silver group">
              <div className="w-14 h-14 rounded-2xl bg-brand-dark flex items-center justify-center border border-brand-silver/10 shrink-0 group-hover:border-brand-blue/30 transition-colors"><Mail className="w-6 h-6 text-brand-blue" /></div>
              <div><p className="text-sm text-brand-silver/60">Napište nám</p><p className="text-xl font-bold text-white">info@yurijstavgroup.cz</p></div>
            </div>
            
            <div className="flex items-start gap-4 text-brand-silver">
              <div className="w-14 h-14 rounded-2xl bg-brand-dark flex items-center justify-center border border-brand-silver/10 shrink-0 mt-1"><MapPin className="w-6 h-6 text-brand-blue" /></div>
              <div>
                <p className="text-sm text-brand-silver/60">Administrativní sídlo</p>
                <p className="text-xl font-bold text-white mb-2">Fryčovická 458, Praha</p>
                <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-xl p-4 mt-4 max-w-sm">
                  <p className="text-sm font-bold text-brand-blue mb-1">Působíme po celé ČR</p>
                  <p className="text-sm text-brand-silver/80 leading-relaxed">
                    Za vaším projektem s radostí přijedeme kamkoliv, kde nás budete potřebovat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-brand-dark/40 border border-brand-silver/10 rounded-[2rem] p-8 md:p-10 backdrop-blur-md shadow-2xl">
          {status === 'success' ? (
            <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-4">
              
              {/* NAŠE NOVÁ ANIMOVANÁ KOMPONENTA */}
              <SuccessCheckmark />
              
              <h4 className="text-3xl font-heading font-bold text-white">Děkujeme za poptávku!</h4>
              <p className="text-brand-silver text-lg">Vaše údaje jsme v pořádku přijali. Brzy se vám ozveme zpět.</p>
              <Button onClick={() => setStatus('idle')} variant="outline" className="mt-8 bg-transparent border-brand-silver/20 text-white hover:bg-white/5 hover:text-white px-8 h-12 rounded-xl transition-all">
                Odeslat další poptávku
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField control={form.control} name="jmeno" render={({ field }) => (
                    <FormItem><FormLabel className="text-brand-silver">Jméno a příjmení *</FormLabel><FormControl><Input className="bg-brand-bg/50 border-brand-silver/20 text-white h-12 rounded-xl focus-visible:ring-brand-blue" {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                  )}/>
                  <FormField control={form.control} name="telefon" render={({ field }) => (
                    <FormItem><FormLabel className="text-brand-silver">Telefon *</FormLabel><FormControl><Input className="bg-brand-bg/50 border-brand-silver/20 text-white h-12 rounded-xl focus-visible:ring-brand-blue" {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                  )}/>
                </div>

                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem><FormLabel className="text-brand-silver">E-mail *</FormLabel><FormControl><Input type="email" className="bg-brand-bg/50 border-brand-silver/20 text-white h-12 rounded-xl focus-visible:ring-brand-blue" {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                )}/>

                <FormField control={form.control} name="adresa" render={({ field }) => (
                  <FormItem><FormLabel className="text-brand-silver">Přesná adresa realizace *</FormLabel><FormControl><Input className="bg-brand-bg/50 border-brand-silver/20 text-white h-12 rounded-xl focus-visible:ring-brand-blue" {...field} /></FormControl><FormMessage className="text-red-400" /></FormItem>
                )}/>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField control={form.control} name="sluzba" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-brand-silver">Typ požadované práce *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl><SelectTrigger className="bg-brand-bg/50 border-brand-silver/20 text-white h-12 rounded-xl focus:ring-brand-blue"><SelectValue placeholder="Vyberte typ práce" /></SelectTrigger></FormControl>
                        <SelectContent className="bg-brand-dark border-brand-silver/20 text-white rounded-xl">
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
                    <FormItem><FormLabel className="text-brand-silver">Přibližná plocha (m²)</FormLabel><FormControl><Input type="number" placeholder="Např. 120" className="bg-brand-bg/50 border-brand-silver/20 text-white h-12 rounded-xl focus-visible:ring-brand-blue" {...field} /></FormControl></FormItem>
                  )}/>
                </div>

                <div className="pt-2">
                  <FormLabel className="text-brand-silver block mb-2">Aktuální stav (nahrát fotku)</FormLabel>
                  <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-brand-silver/20 border-dashed rounded-xl cursor-pointer bg-brand-bg/50 hover:bg-brand-bg transition-colors">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <UploadCloud className="w-6 h-6 text-brand-blue mb-2" />
                      <p className="text-sm text-brand-silver/60">{fileName ? fileName : "Klikněte pro nahrání fotografie (JPG, PNG)"}</p>
                    </div>
                    <input type="file" className="hidden" accept="image/*" onChange={(e) => setFileName(e.target.files?.[0]?.name || null)} />
                  </label>
                </div>

                <FormField control={form.control} name="zprava" render={({ field }) => (
                  <FormItem><FormLabel className="text-brand-silver">Doplňující informace</FormLabel><FormControl><Textarea className="min-h-24 bg-brand-bg/50 border-brand-silver/20 text-white rounded-xl focus-visible:ring-brand-blue" {...field} /></FormControl></FormItem>
                )}/>

                <FormField control={form.control} name="souhlas" render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-4 space-y-0 rounded-xl border border-brand-silver/10 bg-brand-bg/30 p-5 mt-6">
                    <FormControl>
                      <Checkbox 
                        checked={field.value} 
                        onCheckedChange={field.onChange} 
                        className="mt-1 border-brand-silver/40 data-[state=checked]:bg-brand-blue data-[state=checked]:border-brand-blue data-[state=checked]:text-white shrink-0"
                      />
                    </FormControl>
                    <div className="flex-1">
                      <FormLabel className="text-brand-silver/90 text-sm leading-relaxed cursor-pointer font-normal block">
                        Souhlasím s dodržováním právních podmínek (GDPR). Mé soukromé informace budou použity <strong className="text-white font-medium">pouze pro účely vyplnění dokumentace, zpracování poptávky a komerční nabídky</strong>, a v případě spolupráce pro nezbytné účetní a smluvní právní účely.
                      </FormLabel>
                      <FormMessage className="text-red-400 mt-2 block" />
                    </div>
                  </FormItem>
                )}/>

                {status === 'error' && <p className="text-red-400 text-sm text-center bg-red-400/10 p-3 rounded-lg border border-red-400/20">Něco se pokazilo, zkuste to prosím znovu.</p>}

                <Button 
                  type="submit" 
                  disabled={status === 'loading' || !souhlasChecked} 
                  className={`w-full font-bold h-14 rounded-xl text-lg transition-all mt-6 flex items-center justify-center ${
                    souhlasChecked 
                      ? "bg-brand-blue hover:bg-brand-blue-light text-white hover:scale-[1.02] shadow-lg shadow-brand-blue/20" 
                      : "bg-brand-dark/80 text-brand-silver/40 border border-brand-silver/20 opacity-70"
                  }`}
                >
                  {status === 'loading' ? 'Odesílám...' : 'Odeslat nezávaznou poptávku'} 
                  <ArrowRight className={`ml-2 w-5 h-5 ${souhlasChecked ? "text-white" : "text-brand-silver/40"}`} />
                </Button>
              </form>
            </Form>
          )}
        </div>

      </div>
    </section>
  )
}