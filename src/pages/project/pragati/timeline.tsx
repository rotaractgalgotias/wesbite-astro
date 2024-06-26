import { useState } from "react";
import { cn } from "../../../utils";
import ImgSlider from "./_components/ImgSlider";

const Ind = ({
  date,
  title,
  description,
  activeIndex,
  setActiveIndex,
  id,
}: {
  date: Date;
  title: string;
  description: string;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  id: number;
}) => {
  const date_ = formatDate(date);
  return (
    <div className="flex h-[25%] items-center justify-between">
      <p className="w-24">{date_}</p>
      <div
        className={cn(
          "h-full w-full border-l-2 py-8 pl-8 pr-4 transition-all hover:border-neutral-300 hover:bg-gray-200 hover:[box-shadow:rgba(50,_50,_93,_0.25)_0px_30px_60px_-12px_inset,_rgba(0,_0,_0,_0.3)_0px_18px_36px_-18px_inset]",
          {
            "border-neutral-300 bg-gray-200 [box-shadow:rgba(50,_50,_93,_0.25)_0px_30px_60px_-12px_inset,_rgba(0,_0,_0,_0.3)_0px_18px_36px_-18px_inset]":
              activeIndex === id,
          }
        )}
        role="button"
        onClick={() => setActiveIndex(id)}
      >
        <h3 className="text-balance text-lg font-medium">{title}</h3>
        <p className="line-clamp-3 text-balance">{description}</p>
      </div>
    </div>
  );
};

// Create a dummy array of objects
const dummyData = [
  {
    date: new Date("2024-01-24"),
    title: "New Year Celebrations",
    description:
      "Join us to celebrate the new year with fireworks and festivities at the city park.",
  },
  {
    date: new Date("2024-02-14"),
    title: "Valentine's Day Special",
    description:
      "Special event for Valentine's Day including a romantic concert and dinner.",
  },
  {
    date: new Date("2024-03-17"),
    title: "St. Patrick's Day Parade",
    description:
      "Experience the annual St. Patrick's Day parade with us, featuring floats, music, and lots of green!",
  },
  {
    date: new Date("2024-04-01"),
    title: "April Fool's Day Comedy Show",
    description:
      "Get ready to laugh with our lineup of comedians for a hilarious April Fool's day event.",
  },
  {
    date: new Date("2024-04-01"),
    title: "April Fool's Day Comedy Show",
    description:
      "Get ready to laugh with our lineup of comedians for a hilarious April Fool's day event.",
  },
];

function formatDate(date: Date): string {
  const day = date.getDate();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[date.getMonth()]; // getMonth() returns month from 0 (January) to 11 (December)

  return `${day} ${month}`;
}

export default function TimeLine() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="relative mx-auto mt-6 flex max-w-screen-xl flex-col items-center p-8 px-4 sm:px-6 md:flex-row">
      <div className="flex h-[80dvh] w-full gap-3 overflow-hidden">
        <div className="no-scrollbar h-[80dvh] w-[50%] overflow-hidden overflow-y-auto">
          {dummyData.map((data, index) => {
            return (
              <Ind
                key={index}
                date={data.date}
                title={data.title}
                description={data.description}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                id={index}
              />
            );
          })}
        </div>
        <div className="w-full">
          <ImgSlider />
          <div className="my-6">
            <h2 className="mb-1.5 text-3xl font-bold">Some Heading</h2>
            <p className="line-clamp-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              exercitationem quo fugiat consequatur dolores nam sequi architecto
              earum iure consequuntur unde quaerat aliquid ducimus sint
              reprehenderit totam, harum aspernatur veniam perspiciatis
              inventore magnam! Odit explicabo iusto quam a soluta, ullam, alias
              nemo, amet eum nisi sequi veniam vitae exercitationem? Veniam
              fugit commodi quis temporibus quasi enim ipsam aliquid harum aut
              accusamus, non architecto maxime ea eveniet consequuntur, modi
              suscipit. Perferendis culpa quam, doloremque tempora eius delectus
              consectetur quibusdam magnam enim eligendi amet non aperiam quod
              est rerum officia soluta animi eveniet quisquam sed exercitationem
              adipisci? Repellendus velit totam quidem deleniti voluptatum
              aliquam voluptatibus tempore fugiat dolor! Ad voluptatibus
              necessitatibus, architecto quidem hic facilis rem. Nisi nulla
              sapiente eligendi omnis corrupti. Illum assumenda voluptatum at
              tenetur eum ex asperiores exercitationem repudiandae facilis sit
              suscipit provident ipsum voluptates enim, illo dolorum odio
              reprehenderit! In voluptatibus repellat dolorem sit, labore
              repudiandae! Expedita, numquam sint. Recusandae possimus quia
              nulla velit eius, voluptatibus debitis itaque eos illum natus
              reiciendis veritatis soluta dolorem ut blanditiis earum quod,
              tenetur rem! Esse sunt accusantium quod fuga nostrum repudiandae
              commodi laboriosam. Vel totam, nostrum minus perferendis corporis
              aperiam blanditiis fugiat iusto accusamus iste molestiae aut,
              velit voluptates doloremque. Tempore molestiae eum debitis officia
              culpa modi laudantium mollitia earum nobis illo, nam suscipit vero
              vel rerum quam a, omnis rem cumque maxime voluptas dolorum.
              Excepturi nesciunt ullam voluptatum consequuntur asperiores
              dolore, neque, blanditiis explicabo quisquam doloremque ipsam
              voluptatibus nemo sequi repudiandae reiciendis a omnis deleniti
              dignissimos itaque harum officiis veniam. Maiores eius impedit
              sapiente, consectetur, vel rerum ipsam, accusantium asperiores
              corrupti eos dolor obcaecati quod voluptate commodi velit quas. In
              ratione consectetur eius modi nulla fugiat illo facere velit
              dolore? Iste qui totam cumque tenetur distinctio doloribus?
              Dolorem vitae totam placeat cum veritatis excepturi ullam numquam
              ipsam quidem et. Tempore dolorem facilis eveniet voluptates quas
              atque error, officiis dolores. Sint et veniam ratione aut
              accusantium ducimus repudiandae corrupti consequatur beatae!
              Suscipit alias, iusto perspiciatis esse assumenda atque sit
              delectus obcaecati consectetur pariatur illum, voluptatem in id
              enim nobis explicabo non aut blanditiis eaque illo! Repellendus
              optio saepe aliquam provident. Modi ad cupiditate tempora facere,
              ut accusantium repudiandae sequi totam exercitationem expedita
              nisi similique earum neque culpa mollitia quis! Delectus,
              corporis? Aliquam facere sapiente quasi soluta deleniti optio!
              Animi repellendus magnam culpa magni error nulla accusantium quia
              adipisci debitis sapiente enim eaque aliquid doloremque inventore
              veritatis, voluptatum quae officiis qui rem praesentium facilis.
              Rerum, recusandae laborum sequi tempora quis unde ad, pariatur
              voluptatibus error, beatae doloribus itaque impedit alias voluptas
              dolorum hic nam ratione sit reprehenderit! Aliquid earum est
              asperiores! Obcaecati ex, rerum dolorem cumque nemo vitae! Nobis
              ullam accusantium tempore eos aperiam! Cupiditate, eum temporibus!
              Eius, doloribus corrupti sit necessitatibus sapiente aperiam harum
              rem iusto, nemo, reprehenderit officia sint hic quisquam
              asperiores? Impedit illum ab error nisi nostrum saepe temporibus
              rerum dolor earum ad eos quod maxime, in repellat! Necessitatibus,
              omnis. Maiores exercitationem sapiente reiciendis. Voluptas,
              minima neque dolore reiciendis nemo itaque animi voluptatibus
              assumenda ipsum quos numquam deleniti doloremque adipisci
              laboriosam ex distinctio quibusdam obcaecati doloribus aperiam
              incidunt optio asperiores! Veritatis voluptate sunt minus
              quisquam, impedit commodi aliquam, ducimus minima odit soluta rem
              rerum numquam qui nesciunt nobis. Libero, molestiae. Voluptatem
              veritatis reprehenderit, nostrum quam provident sequi vero.
              Pariatur sunt reprehenderit corporis illo architecto hic, aliquam
              assumenda ipsam, sint ipsum harum esse animi, possimus quae
              accusantium perferendis voluptatibus impedit dolore? Asperiores
              velit eos, numquam distinctio fugit quidem doloribus. Illum
              similique laboriosam nam minima fuga rerum dignissimos earum?
              Magni minima doloribus tempore voluptate quod tenetur ad? Ab
              consectetur laboriosam, voluptates repellendus aliquid harum optio
              voluptas nam? Et, quis. Corrupti, error.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
