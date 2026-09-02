import { Countdown } from '@/components/countdown';
import { Reveal } from '@/components/reveal';
import { VenueActions } from '@/components/venue-actions';
import Image from 'next/image';

const earlyMoments = [
  {
    src: '/photos/newborn.jpg',
    alt: '刚出生不久的安安被家人抱在怀里',
    caption: '初见 · 小小的你来到我们身边',
    position: 'object-[50%_44%]',
  },
  {
    src: '/photos/hundred-days.jpg',
    alt: '一百天的安安躺在花纹床单上微笑',
    caption: '百日 · 笑容开始照亮每一天',
    position: 'object-center',
  },
  {
    src: '/photos/first-smile.jpg',
    alt: '安安躺在枕头上开心微笑',
    caption: '成长 · 每天都多一点可爱',
    position: 'object-center',
  },
];

const growingMoments = [
  {
    src: '/photos/growing.jpg',
    alt: '安安趴着认真看向镜头',
    caption: '好奇这个世界',
    position: 'object-[50%_42%]',
  },
  {
    src: '/photos/winter.jpg',
    alt: '安安戴着红色帽子依偎在家人怀里',
    caption: '被爱包围的冬天',
    position: 'object-[50%_40%]',
  },
  {
    src: '/photos/summer-bed.jpg',
    alt: '安安坐在粉色沙发上',
    caption: '会坐啦',
    position: 'object-[50%_45%]',
  },
  {
    src: '/photos/summer-play.jpg',
    alt: '安安在家中开心玩耍',
    caption: '快乐长大',
    position: 'object-center',
  },
];

export default function Home() {
  return (
    <main className="card-stack overflow-x-clip bg-background px-3 py-3 text-foreground sm:px-6 sm:py-8">
      <section className="card-stage" aria-labelledby="invitation-title">
        <article className="invitation-card botanical-card hero-media flex min-h-[calc(100dvh-1.5rem)] w-full max-w-[34rem] items-center justify-center px-11 py-24 text-center sm:min-h-[52rem] sm:px-20">
          <div className="hero-copy relative z-10 flex w-full max-w-sm flex-col items-center">
            <p className="editorial-serif text-lg italic tracking-[0.08em] text-primary sm:text-xl">
              Birthday Invitation
            </p>
            <h1
              id="invitation-title"
              className="mt-4 text-[clamp(2.65rem,12vw,4.4rem)] font-medium leading-[1.04] tracking-[0.05em] text-foreground"
            >
              安安
              <span className="mt-2 block text-[0.56em] tracking-[0.12em] text-primary">一周岁生日宴</span>
            </h1>
            <figure className="portrait-oval mt-7 h-48 w-36 sm:h-56 sm:w-44">
              <Image
                src="/photos/hero.jpg"
                alt="安安开心地坐着微笑"
                fill
                priority
                sizes="(min-width: 640px) 176px, 144px"
                className="rounded-[50%] object-cover object-[50%_30%]"
              />
            </figure>
            <a href="#details" className="date-button mt-7">
              2026.09.25
            </a>
          </div>
        </article>
      </section>

      <section id="details" className="card-stage scroll-mt-4" aria-labelledby="details-title">
        <article className="invitation-card botanical-card gilded-card flex min-h-[52rem] w-full max-w-[34rem] items-center justify-center px-10 py-28 text-center sm:px-20">
          <Reveal className="relative z-10 flex w-full max-w-sm flex-col items-center">
            <h2 id="details-title" className="text-4xl font-medium tracking-[0.08em] sm:text-5xl">
              诚挚邀请
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-7 text-muted-foreground">
              从咿呀学语到摇摇晃晃地探索世界，这个特别的日子，想和最亲爱的家人朋友一起度过。
            </p>

            <div className="mt-8 w-full border-y border-border/80 py-5">
              <div className="flex items-end justify-center gap-4">
                <p className="editorial-serif text-[6.5rem] font-medium leading-[0.78] text-primary">25</p>
                <p className="pb-1 text-left text-sm leading-6 tracking-[0.08em] text-muted-foreground">
                  2026年9月
                  <br />
                  星期五 11:30
                </p>
              </div>
              <Countdown />
            </div>

            <div className="mt-7">
              <p className="text-xs tracking-[0.24em] text-primary">宴会地点</p>
              <h3 className="mt-3 text-2xl font-medium leading-snug tracking-[0.04em] sm:text-3xl">
                5Senses武康花园餐厅
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">上海市徐汇区武康路100弄1号</p>
              <VenueActions />
            </div>
          </Reveal>
        </article>
      </section>

      <section className="card-stage" aria-labelledby="story-title">
        <article className="invitation-card gilded-card flex min-h-[52rem] w-full max-w-[34rem] items-center bg-card px-8 py-20 sm:px-14">
          <Reveal className="relative z-10 w-full text-center">
            <h2 id="story-title" className="text-3xl font-medium leading-snug tracking-[0.05em] sm:text-4xl">
              这一岁，是爱写下的故事
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-muted-foreground">
              从小小一团，到会用笑容回应每一份温柔。
            </p>

            <div className="mt-9 grid grid-cols-2 gap-x-4 gap-y-5 sm:gap-x-6">
              {earlyMoments.map((photo, index) => (
                <figure key={photo.src} className={index === 0 ? 'col-span-2 mx-auto w-[58%]' : ''}>
                  <div className="photo-arch aspect-[4/5]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      fill
                      sizes="(min-width: 640px) 190px, 40vw"
                      className={`object-cover ${photo.position}`}
                    />
                  </div>
                  <figcaption className="mt-2 text-xs leading-5 text-muted-foreground">{photo.caption}</figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </article>
      </section>

      <section className="card-stage" aria-labelledby="growing-title">
        <article className="invitation-card gilded-card flex min-h-[52rem] w-full max-w-[34rem] items-center bg-card px-8 py-20 sm:px-14">
          <Reveal className="relative z-10 w-full text-center">
            <h2 id="growing-title" className="text-3xl font-medium leading-snug tracking-[0.05em] sm:text-4xl">
              会坐，会爬，也会甜甜地笑
            </h2>

            <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-5 sm:gap-x-6 sm:gap-y-6">
              {growingMoments.map((photo, index) => (
                <figure key={photo.src} className={index % 2 === 1 ? 'pt-7' : ''}>
                  <div className="photo-arch aspect-[4/5]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      fill
                      sizes="(min-width: 640px) 190px, 40vw"
                      className={`object-cover ${photo.position}`}
                    />
                  </div>
                  <figcaption className="mt-2 text-xs leading-5 text-muted-foreground">{photo.caption}</figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </article>
      </section>

      <section className="card-stage" aria-labelledby="closing-title">
        <article className="invitation-card botanical-card gilded-card flex min-h-[52rem] w-full max-w-[34rem] items-center justify-center px-11 py-28 text-center sm:px-20">
          <Reveal className="relative z-10 flex w-full max-w-sm flex-col items-center">
            <figure className="portrait-oval h-52 w-40 sm:h-60 sm:w-48">
              <Image
                src="/photos/eleven-months.jpg"
                alt="快一岁的安安坐在地垫上微笑"
                loading="lazy"
                fill
                sizes="(min-width: 640px) 192px, 160px"
                className="rounded-[50%] object-cover object-[50%_42%]"
              />
            </figure>
            <h2 id="closing-title" className="mt-7 text-4xl font-medium leading-tight tracking-[0.06em] sm:text-5xl">
              9月25日
              <span className="mt-1 block text-[0.72em] text-primary">武康路见</span>
            </h2>
            <p className="mt-5 max-w-xs text-sm leading-7 text-muted-foreground">
              一起吃蛋糕、聊聊天，留下她人生第一个生日里最温暖的回忆。
            </p>
            <p className="mt-7 text-xs tracking-[0.22em] text-primary">安安爸爸妈妈 敬邀</p>
          </Reveal>
        </article>
      </section>
    </main>
  );
}
