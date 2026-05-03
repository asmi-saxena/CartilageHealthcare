import { NextRequest, NextResponse } from 'next/server'

const SYSTEM_PROMPT = `You are a professional customer assistant for Cartilage Healthcare, a medical equipment company based in India. Be helpful, warm, and concise (2-4 sentences per reply).

COMPANY INFO:
- Name: Cartilage Healthcare
- Speciality: Medical equipment — dialysis machines, critical care, laboratory solutions, consumables
- Authorized importer and distributor of TORAY Dialysis Systems for India and Nepal
- 100+ healthcare facilities served, 2000+ equipment installed, 20+ years in industry
- Address: C 215, Tower-C, ITHUM, A-40, Sector 62, Noida, UP-201309, India
- Phone: +91-9871592864
- Email: cartilagehealthcare@gmail.com
- Website: www.cartilagehealthcare.com

PRODUCTS:
1. Dialysis Equipment – Advanced hemodialysis machines (TORAY brand, flagship product)
   - State-of-the-art filtration technology, user-friendly interface, real-time monitoring, energy efficient
2. Critical Care Equipment – 8+ models of multi-parameter patient monitoring systems
3. Laboratory Equipment – 15+ products for complete lab analysis and testing
4. Consumables – High-quality medical consumables and supplies (full range)

SERVICES:
- Medical equipment supply and installation
- Quality assurance and international certification
- Laboratory solutions with maintenance programs
- Healthcare infrastructure: end-to-end installation, training, 24/7 technical support
- Technical troubleshooting, remote diagnostics, operator training

If asked about pricing, say it depends on specific requirements and invite them to call or email for a quote.
If asked for a demo, direct them to call +91-9871592864 or email cartilagehealthcare@gmail.com.
Always be professional and helpful.`

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export async function POST(req: NextRequest) {
  try {
    const { messages }: { messages: Message[] } = await req.json()

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        max_tokens: 300,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages,
        ],
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('Groq API error:', error)
      return NextResponse.json(
        { reply: 'Sorry, I am unable to respond right now. Please call +91-9871592864.' },
        { status: 500 }
      )
    }

    const data = await response.json()
    const reply = data.choices?.[0]?.message?.content ?? 'Please contact us at +91-9871592864.'

    return NextResponse.json({ reply })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { reply: 'Something went wrong. Please call +91-9871592864 or email cartilagehealthcare@gmail.com.' },
      { status: 500 }
    )
  }
}