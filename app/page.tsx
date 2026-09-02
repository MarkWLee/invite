import { CalendarDays, Heart, MapPin } from 'lucide-react';
import { Countdown } from '@/components/countdown';
import { Reveal } from '@/components/reveal';
import { VenueActions } from '@/components/venue-actions';

const photos = [
  {
    src: '/photos/newborn.jpg',
    alt: '刚出生不久的李施安被家人抱在怀里',
    caption: '刚刚来到我们身边',
    className: 'md:col-span-5',
    aspect: 'aspect-[4/5]',
    position: 'object-[50%_44%]',
  },
  {
    src: '/photos/hundred-days.jpg',
    alt: '一百天的李施安躺在花纹床单上微笑',
    caption: '一百天的灿烂笑脸',
    className: 'md:col-span-7 md:pt-14',
    aspect: 'aspect-[16/11]',
    position: 'object-center',
  },
  {
    src: '/photos/first-smile.jpg',
    alt: '李施安躺在枕头上开心微笑',
    caption: '每一天都多一点可爱',
    className: 'md:col-span-4 md:mt-[-4rem]',
    aspect: 'aspect-[4/5]',
    position: 'object-center',
  },
  {
    src: '/photos/growing.jpg',
    alt: '李施安趴着认真看向镜头',
    caption: '开始好奇这个世界',
    className: 'md:col-span-3',
    aspect: 'aspect-[4/5]',
    position: 'object-[50%_42%]',
  },
  {
    src: '/photos/winter.jpg',
    alt: '李施安戴着红色帽子依偎在家人怀里',
    caption: '被爱包围的冬天',
    className: 'md:col-span-5 md:mt-12',
    aspect: 'aspect-[4/5]',
    position: 'object-[50%_40%]',
  },
  {
    src: '/photos/summer-bed.jpg',
    alt: '李施安坐在粉色沙发上',
    caption: '会坐啦，也长大了一点',
    className: 'md:col-span-7',
    aspect: 'aspect-[16/10]',
    position: 'object-[50%_45%]',
  },
  {
    src: '/photos/eleven-months.jpg',
    alt: '快一岁的李施安坐在地垫上微笑',
    caption: '快一岁的小可爱',
    className: 'md:col-span-5 md:pt-20',
    aspect: 'aspect-[4/5]',
    position: 'object-[50%_42%]',
  },
];

export default function Home() {
  return (
    <main className="overflow-x-clip bg-background text-foreground">
      <section className="grid min-h-[100dvh] grid-rows-[52dvh_1fr] md:grid-cols-[0.88fr_1.12fr] md:grid-rows-1">
        <div className="order-2 flex items-center px-6 py-8 sm:px-10 md:order-1 md:px-[8vw] md:py-16">
          <div className="hero-copy max-w-xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              2026.09.25 · Shanghai
            </p>
            <h1 className="text-[clamp(2.9rem,8vw,6.7rem)] font-semibold leading-[0.98] tracking-[-0.07em]">
              <span className="block">李施安</span>
              <span className="mt-2 block text-primary">一周岁啦</span>
            </h1>
            <p className="mt-6 max-w-sm text-base leading-7 text-muted-foreground sm:text-lg">
              邀请你，一起来见证她生命里的第一个生日。
            </p>
            <a
              href="#details"
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold whitespace-nowrap text-primary-foreground transition-transform duration-300 active:scale-[0.98]"
            >
              查看宴会信息
            </a>
          </div>
        </div>

        <div className="hero-media order-1 min-h-0 overflow-hidden md:order-2 md:m-5 md:ml-0 md:rounded-[1.3rem]">
          <img
            src="/photos/hero.jpg"
            alt="李施安开心地坐着微笑"
            className="h-full w-full object-cover object-[50%_30%]"
            width="1425"
            height="1900"
            fetchPriority="high"
          />
        </div>
      </section>

      <section id="details" className="px-5 py-24 sm:px-8 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl md:text-6xl">
              一起庆祝，她的一岁
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              从咿呀学语到摇摇晃晃地探索世界，这个特别的日子，想和最亲爱的家人朋友一起度过。
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-[1.15fr_0.85fr]">
            <Reveal>
              <div className="flex min-h-[27rem] flex-col justify-between rounded-[1.3rem] bg-primary p-7 text-primary-foreground sm:p-10">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <CalendarDays aria-hidden="true" className="size-5" strokeWidth={1.8} />
                  生日宴时间
                </div>
                <div className="py-10">
                  <p className="text-[clamp(5.8rem,19vw,10rem)] font-semibold leading-none tracking-[-0.08em]">
                    25
                  </p>
                  <div className="mt-4 flex items-end justify-between gap-5 border-t border-primary-foreground/35 pt-5">
                    <p className="text-2xl font-semibold">九月</p>
                    <p className="text-right text-sm leading-6 text-primary-foreground/80">
                      2026年<br />
                      星期五 11:30
                    </p>
                  </div>
                </div>
                <Countdown />
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="flex min-h-[27rem] flex-col justify-between rounded-[1.3rem] border border-border bg-card p-7 text-card-foreground sm:p-10">
                <MapPin aria-hidden="true" className="size-8 text-primary" strokeWidth={1.7} />
                <div className="mt-16">
                  <h3 className="text-3xl font-semibold leading-tight tracking-[-0.035em]">
                    5Senses
                    <br />
                    武康花园餐厅
                  </h3>
                  <p className="mt-5 max-w-sm text-base leading-7 text-muted-foreground">
                    上海市徐汇区武康路100弄1号
                  </p>
                  <VenueActions />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl md:text-6xl">
              这一岁，都是闪闪发亮的日子
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              从小小一团，到会坐、会爬、会笑着回应每一份爱。
            </p>
          </Reveal>

          <div className="mt-14 grid gap-x-5 gap-y-10 md:grid-cols-12 md:items-start">
            {photos.map((photo, index) => (
              <Reveal key={photo.src} className={photo.className} delay={(index % 3) * 70}>
                <figure>
                  <div className={`overflow-hidden rounded-[1.3rem] bg-muted ${photo.aspect}`}>
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      width="1400"
                      height="1400"
                      className={`h-full w-full object-cover ${photo.position} transition-transform duration-700 hover:scale-[1.015]`}
                    />
                  </div>
                  <figcaption className="mt-3 text-sm text-muted-foreground">{photo.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 md:py-36">
        <Reveal className="mx-auto max-w-5xl">
          <div className="rounded-[1.3rem] bg-secondary px-7 py-16 text-secondary-foreground sm:px-14 md:py-24">
            <Heart aria-hidden="true" className="size-8 text-primary" strokeWidth={1.6} />
            <p className="mt-10 max-w-4xl text-3xl font-semibold leading-[1.35] tracking-[-0.035em] sm:text-4xl md:text-5xl">
              她还不懂生日的意义，却已经懂得用笑容拥抱每一个爱她的人。
            </p>
            <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              诚挚邀请你来到她的一岁生日宴，一起吃蛋糕、聊聊天，留下这一天最温暖的回忆。
            </p>
          </div>
        </Reveal>
      </section>

      <footer className="px-5 pb-12 pt-10 text-center sm:px-8 md:pb-16">
        <p className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">9月25日，武康路见</p>
        <p className="mt-5 text-sm text-muted-foreground">李施安爸爸妈妈 敬邀</p>
      </footer>
    </main>
  );
}
