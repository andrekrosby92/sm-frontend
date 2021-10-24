import dynamic from 'next/dynamic'

const ContactSection = dynamic(() => import('scenarios/contact/components/Contact'))

export default function Contact(): JSX.Element {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY

  return (
    <div>
      <iframe
        allowFullScreen
        height="350"
        loading="lazy"
        src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJV4RNpQjjQ0YRfWKwKlI_ccM&key=${apiKey}&language=nb`}
        style={{ border: '0' }}
        width="100%"
      />
      <ContactSection />
    </div>
  )
}
