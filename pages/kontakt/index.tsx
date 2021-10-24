import dynamic from 'next/dynamic'

const ContactSection = dynamic(() => import('scenarios/contact/components/Contact'))

export default function Contact(): JSX.Element {
  return (
    <div>
      <iframe
        allowFullScreen
        height="350"
        loading="lazy"
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJV4RNpQjjQ0YRfWKwKlI_ccM&key=AIzaSyCMWhrk--J353RIQ5kQ4qtXCHyDKZejxs8&language=nb"
        style={{ border: '0' }}
        width="100%"
      />
      <ContactSection />
    </div>
  )
}
