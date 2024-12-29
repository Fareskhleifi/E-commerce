import slide1 from './imgs/OurPrin.jpg';
import slide2 from './imgs/Our2.jpg';
import slide3 from './imgs/Our4.jpg';
import slide4 from './imgs/Our3.jpg';

const features = [
    { name: 'Capacité', description: '5 personnes' },
    { name: 'Dimensions ,Hauteur', description: '420 x 300 cm , 220 cm ' },
    { name: 'Colonne d`eau (toile extérieure)', description: ': 4 000 mm' },
    { name: 'Tapis de sol', description: 'cousu et étanche' },
    { name: 'Ventilation', description: 'excellente grâce au toit en maille et aux multiples ouvertures' },
    { name: 'Protection contre les insectes', description: 'moustiquaires intégrées aux fenêtres et portes' },
  ]
  
  export default function Features() {
    return (
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Caractéristiques principales</h2>
            <p className="mt-4 text-gray-500">
La tente Skandika Tønsberg 5 est une tente familiale spacieuse conçue pour accueillir jusqu'à cinq personnes. Elle se distingue par sa hauteur de 220 cm.
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-[25px] sm:gap-6 lg:gap-8">
            <img
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              src={slide1}
              className="rounded-lg bg-gray-100"
            />
            <img
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              src={slide2}
              className="rounded-lg bg-gray-100"
            />
            <img
              alt="Side of walnut card tray with card groove and recessed card area."
              src={slide3}
              className="rounded-lg bg-gray-100"
            />
            <img
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              src={slide4}
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>
    )
  }
  