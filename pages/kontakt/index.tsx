import SEO from 'components/SEO/SEO'
import ContactSection from 'scenarios/contact/components/Contact'

export default function Contact(): JSX.Element {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY

  return (
    <div>
      <SEO
        description="Trenger du skilt, bannere eller bildekor? Med 30 års erfaring og over 700 fornøyde kunder, tilbyr vi høy kvalitet, personlig service og har fokus på miljøet."
        descriptionFacebook="Trenger du skilt, bannere eller bildekor? Kontakt Skiltmakeren i dag!"
        descriptionTwitter="Trenger du skilt, bannere eller bildekor? Vi tilbyr høy kvalitet, personlig service og har fokus på miljøet."
        metaImage="/images/meta-image.png"
        title="Kontakt oss - Skiltmakeren AS · Vi kan skilt og dekor."
        url="https://www.skiltmakeren.no/kontakt"
      />

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
