import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Тренування з вагою",
    description:
      "Відчуй потужність в кожному русі. Тренування з вагами – твій шлях до фізичної та ментальної силової вдосконаленості. Піднімай ваги, крокуй до своєї мети, визначай нові горизонти. Спробуй себе та відкрий потенціал, який перевершить усі очікування. Ваги – твій ключ до справжнього зміцнення тіла та душі. Занурся в тренування з вагами – твій власний шлях до справжнього самовдосконалення.",
    image: image1,
    price: '1100 грн/місяць'
    
  },
  {
    name: "Класи йоги",
    image: image2,
    price: '920 грн/місяць'
  },
  {
    name: "Класи тренування мишців кору",
    description:
      "Наші класи тренування м'язів кору - це відмінний спосіб удосконалити ваш фізичний стан та покращити гнучкість. Під керівництвом досвідчених інструкторів, ви зосереджуєтеся на зміцненні м'язів кору, включаючи живіт, спину та пахви. Ці тренування поліпшують вашу поставу, знижують ризик травм та сприяють збільшенню м'язової стійкості.",
    image: image3,
    price: '1030 грн/місяць'
  },
  {
    name: "Класи розтяжки",
    description:
      "Наші класи розтяжки - це спеціально розроблені заняття для покращення гнучкості та загального здоров'я. Завдяки вправам, спрямованим на розтягування м'язів, ви відчуєте, як ваше тіло стає більш гнучким та витривалим. Інструктори допоможуть вам розвивати гнучкість в різних частинах тіла, поліпшуючи кровообіг та зменшуючи напругу м'язів.",
    image: image4,
    price: '740 грн/місяць'
  },
  {
    name: "Парні заняття",
    image: image5,
    price: '1480 грн/місяць'
  },
  {
    name: "Групові заняття",
    description:
      "Наші групові заняття - це не лише тренування, а справжня енергія спільності. Під керівництвом наших професійних інструкторів ви отримаєте можливість відчути підтримку та мотивацію від однодумців. Від інтенсивних кардіо до зосереджених йога-сесій, у нас є різноманітні заняття для всіх рівнів підготовки.",
    image: image6,
    price: '555 грн/місяць'
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>НАШІ КЛАСИ</HText>
            <p className="py-5">
              Відкрийте для себе світ наших класів, де кожен урок - це
              можливість покращити своє здоров'я та почувати себе краще.
              Незалежно від вашого рівня підготовки чи цілей, наші досвідчені
              інструктори створять для вас унікальні заняття, де ви зможете
              розвивати силу, гнучкість та зосередженість.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
                price={item.price}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
