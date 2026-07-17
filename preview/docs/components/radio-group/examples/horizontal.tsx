import { Label, RadioGroup, RadioGroupItem } from "@aogusto/arui"

export default function Example() {
  return (
    <RadioGroup defaultValue="card" orientation="horizontal" className="flex flex-row flex-wrap gap-6">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="card" id="payment-card" />
        <Label htmlFor="payment-card">Card</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="pix" id="payment-pix" />
        <Label htmlFor="payment-pix">Pix</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="boleto" id="payment-boleto" />
        <Label htmlFor="payment-boleto">Boleto</Label>
      </div>
    </RadioGroup>
  )
}
