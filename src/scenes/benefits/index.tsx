import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Сучасне обладнання та інфраструктура",
    description:
      "Ми пишаємося сучасним обладнанням та комфортною інфраструктурою нашого фітнес-центру. Високоякісні тренажери та зручні зони відпочинку створюють невербальне середовище, де клієнти можуть відчути себе комфортно та зосереджено на своєму фітнес-досвіді.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Спільнота та мотивація",
    description:
      "Наш фітнес-центр - не лише місце для тренувань, але й спільнота, де ви знайдете підтримку та мотивацію. Групові тренування, спільні події та консультації тренерів створюють атмосферу, яка стимулює досягати нових вершин у ваших фітнес-зусиллях.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Професійний тренерський склад",
    description:
      "Наша команда досвідчених та кваліфікованих тренерів завжди готова допомогти вам досягти ваших цілей. Вони враховують ваші індивідуальні особливості та створюють персоналізовані програми тренувань, щоб максимально ефективно впливати на ваше тіло.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>БІЛЬШЕ НІЖ ПРОСТО ЗАЛ.</HText>
          <p className="text-md my-5">
            Ми пропонуємо фітнес-обладнання світового класу, тренерів і заняття,
            які з легкістю приведуть вас до ваших фітнес-цілей. Ми піклуємось
            про кожного члена наших фітнес центрів і слідкуємо за якістю нашого
            обладнання.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    МІЛЬОНИ ЩАСЛИВИХ ЧЛЕНІВ ДОСЯГАЮТЬ{" "}
                    <span className="text-primary-500">СВОЄЇ МЕТИ</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Долучіться до нашої успішної спільноти!Наші члени не лише
                займаються фізичною активністю, але і досягають своїх цілей та
                встановлюють нові стандарти для власного щастя і здоров'я. У нас
                ви знайдете не лише індивідуальні тренування, але й сильну
                спільноту, яка надихає, мотивує і робить кожен день особливим.
                Приєднуйтеся до нас, і разом ми будемо рухатися вперед до нових
                вершин фітнесу та благополуччя!
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Приєднатись зараз
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
