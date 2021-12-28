import Image from 'next/image'

import Icon from 'components/Icons/Icon'

export default function EmployeeCard({
  className,
  email,
  image,
  name,
  phoneNumber,
  title,
}: {
  className?: string
  email: string
  image: string
  name: string
  phoneNumber: string
  title: string
}): JSX.Element {
  return (
    <div className={`relative isolate max-w-xs py-12 rounded-xl shadow-xl bg-white overflow-hidden ${className}`}>
      <div className="absolute z-0 w-[500px] h-48 transform -translate-x-40 -translate-y-24 -rotate-12">
        <div className="h-full bg-gradient-to-br from-primary via-primary/80 to-primary-lighter" />
      </div>
      <section className="relative z-10 h-full space-y-4 flex flex-col items-center">
        <div className="w-40 h-40 p-1 rounded-full shadow-xl bg-gradient-to-br from-primary-light to-primary">
          <div className="relative h-full flex justify-center items-center border-2 border-white rounded-full">
            <Image alt={name} className="rounded-full object-cover" layout="fill" src={image} />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-medium">{name}</span>
          <span className="text-md text-gray-600">{title}</span>
        </div>
        <div className="max-w-max mx-auto space-y-4">
          <div className="space-x-3 flex justify-items-start items-center">
            <Icon className="w-8 h-8" name="envelope-alt" />
            <span className="space-y-1 flex flex-col">
              <span className="text-xs leading-none text-gray-500">E-post</span>
              <a className="font-medium leading-none text-gray-600" href={`mailto:${email}`}>
                {email}
              </a>
            </span>
          </div>
          <div className="space-x-3 flex justify-items-start items-center">
            <Icon className="w-8 h-8" name="phone-alt" />
            <span className="space-y-1 flex flex-col">
              <span className="text-xs leading-none text-gray-500">Telefon</span>
              <span className="font-medium leading-none text-gray-600">{phoneNumber}</span>
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
