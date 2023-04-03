import React, { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useSeeMode } from "../../../see-mode/module";

const textAnimationDown = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const Nabor = () => {
  // see mode
  const store = useSeeMode();
  const turn = useSeeMode((state) => state.turn);
  const styles = {
    color: store.color,
    fontSize: store.size,
    fontFamily: store.font,
    fontStyle: store.style,
    fontWeight: store.style,
    textDecoration: store.style,
  };
  return (
    <motion.div
      viewport={{ amount: 0.1, once: true }}
      whileInView="visible"
      initial="hidden"
      className="Nabor padding-class"
      custom={2}
      variants={textAnimationDown}
    >
      <div className="Text">
        <h4>
          На время обучения центр предоставляет моделей и все расходные
          материалы
        </h4>

        <p style={turn ? styles : {}}>ОТРАБОТКА НА МОДЕЛЯХ</p>
        <span></span>
        <p style={turn ? styles : {}}>
          Мы даем максимум практики! Каждый ученик под контролем тренера
          отрабатывает каждую зону на 9 моделях (брови, губы, межресничка).
          Приступить к работе после обучение - легко! ДАРИМ нашим ученикам
          стартовый набор, который включает все самое необходимое.
        </p>
      </div>
      <AnimateSharedLayout>
        <motion.ul className="list-ul" layout initial={{ borderRadius: 25 }}>
          {items.map((item) => (
            <Item key={item} />
          ))}
        </motion.ul>
      </AnimateSharedLayout>
    </motion.div>
  );
};
export default Nabor;

function Item() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.li
      className="list-li"
      layout
      onClick={toggleOpen}
      initial={{ borderRadius: 10 }}
    >
      {/* <motion.div className="avatar" layout /> */}
      <motion.div>
        <h4>СТАРТОВЫЙ НАБОР</h4>
        <h5>
          для ТАРИФА Стандарт стоимостью{" "}
          <h5 className="word-price">22580 руб.</h5>
        </h5>
      </motion.div>
      <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
    </motion.li>
  );
}

function Content() {
  // see mode
  const store = useSeeMode();
  const turn = useSeeMode((state) => state.turn);
  const styles = {
    color: store.color,
    fontSize: "18px",
    fontFamily: store.font,
    fontStyle: store.style,
    fontWeight: store.style,
    textDecoration: store.style,
  };
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <p style={turn ? styles : {}}>• Аппарат mast (мотор Китай) - 6900</p>
      <p style={turn ? styles : {}}>• Блок aurora 2 - 4300</p>
      <p style={turn ? styles : {}}>
        • Пигмент для век “Black Velvet” от Lip Blush - 1200
      </p>
      <p style={turn ? styles : {}}>
        • Пигменты для губ от Lip Blush 3шт по 5мл - 3400{" "}
      </p>
      <p style={turn ? styles : {}}>
        • Минеральный пигмент для бровей от “CONTUR pro” - 2700
      </p>
      <p style={turn ? styles : {}}>• Колпачки для пигмента - 200</p>
      <p style={turn ? styles : {}}>• Подставка для колпачков - 250 </p>
      <p style={turn ? styles : {}}>• Линейка - 200 </p>
      <p style={turn ? styles : {}}>• Картриджи Defender 20 шт - 2080</p>
      <p style={turn ? styles : {}}>
        • Карандаши для эскиза: белый - 100 коричневый - 200 красный - 200{" "}
      </p>
      <p style={turn ? styles : {}}>• Коврик для отработки – 200</p>
      <p style={turn ? styles : {}}>• Бандажный бинт – 150 </p>
      <p style={turn ? styles : {}}>
        • Фартук мастера – 500 СТАРТОВЫЙ НАБОР для ТАРИФА Стандарт+ стоимостью
        57980
      </p>
      <p style={turn ? styles : {}}>• Аппарат WTE (мотор Германия) - 24000 </p>
      <p style={turn ? styles : {}}>• Блок WTE – 12800 </p>
      <p style={turn ? styles : {}}>• RCA (проdод) - 2000</p>
      <p style={turn ? styles : {}}>
        • Пигмент для век “Black Velvet” от Lip Blush - 1200{" "}
      </p>
      <p style={turn ? styles : {}}>
        • Пигменты для губ от Lip Blush 3шт по 5мл - 3400
      </p>
      <p style={turn ? styles : {}}>
        • 3 Минеральных пигмента для бровей от “CONTUR pro” – 8100
      </p>
      <p style={turn ? styles : {}}>
        • Анастезия первичная b-caine и вторичная TKTX - 2400
      </p>
      <p style={turn ? styles : {}}>• Колпачки для пигмента - 200 </p>
      <p style={turn ? styles : {}}>• Подставка для колпачков - 250</p>
      <p style={turn ? styles : {}}>• Линейка - 200</p>
      <p style={turn ? styles : {}}>• Картриджи Defender 20 шт - 2080</p>
      <p style={turn ? styles : {}}>
        • Карандаши для эскиза: белый - 100 коричневый - 200 красный - 200
      </p>
      <p style={turn ? styles : {}}>• Коврик для отработки – 200</p>
      <p style={turn ? styles : {}}>• Бандажный бинт – 150 </p>
      <p style={turn ? styles : {}}>• Фартук мастера – 500</p>
    </motion.div>
  );
}

const items = [0];
