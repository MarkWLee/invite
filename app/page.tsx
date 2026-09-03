import { Countdown } from '@/components/countdown';
import { Reveal } from '@/components/reveal';
import { VenueActions } from '@/components/venue-actions';
import Image from 'next/image';

const earlyMoments = [
  {
    src: '/photos/newborn.jpg',
    alt: '刚出生不久的安安被家人抱在怀里',
    caption: '刚见面时，我只有小小一团',
    position: 'object-[50%_44%]',
  },
  {
    src: '/photos/hundred-days.jpg',
    alt: '一百天的安安躺在花纹床单上微笑',
    caption: '百天啦，我会咯咯笑啦',
    position: 'object-center',
  },
  {
    src: '/photos/first-smile.jpg',
    alt: '安安躺在枕头上开心微笑',
    caption: '每天都多一点点可爱',
    position: 'object-center',
  },
];

const growingMoments = [
  {
    src: '/photos/growing.jpg',
    alt: '安安趴着认真看向镜头',
    caption: '趴着看看大大的世界',
    position: 'object-[50%_42%]',
  },
  {
    src: '/photos/winter.jpg',
    alt: '安安戴着红色帽子依偎在家人怀里',
    caption: '冬天也要暖乎乎',
    position: 'object-[50%_40%]',
  },
  {
    src: '/photos/summer-bed.jpg',
    alt: '安安坐在粉色沙发上',
    caption: '看，我会自己坐啦',
    position: 'object-[50%_45%]',
  },
  {
    src: '/photos/summer-play.jpg',
    alt: '安安在家中开心玩耍',
    caption: '每天都有新玩法',
    position: 'object-center',
  },
];

export default function Home() {
  return (
    <main className="card-stack overflow-x-clip bg-background px-3 py-3 text-foreground sm:px-6 sm:py-8">
      <section className="card-stage" aria-labelledby="invitation-title">
        <article className="invitation-card hero-card hero-media w-full max-w-[34rem]">
          <h1 id="invitation-title" className="sr-only">
            安安一周岁生日宴邀请函
          </h1>
          <Image
            src="/cartoon-invitation-annan.png"
            alt="安安一周岁生日邀请函，2026年9月25日11点30分，5Senses武康花园餐厅"
            width={941}
            height={1672}
            priority
            sizes="(min-width: 640px) 544px, calc(100vw - 24px)"
            className="mx-auto h-auto max-h-[calc(100dvh-1.5rem)] w-auto max-w-full object-contain sm:max-h-[calc(100dvh-2rem)]"
          />
        </article>
      </section>

      <section
        id="details"
        className="card-stage scroll-mt-4"
        aria-labelledby="details-title"
      >
        <article className="invitation-card paper-card flex min-h-[52rem] w-full max-w-[34rem] items-center px-7 py-16 text-center sm:px-14">
          <Reveal className="relative z-10 mx-auto w-full max-w-md">
            <p className="scribble-note mx-auto">安安的生日小纸条</p>
            <h2
              id="details-title"
              className="mt-5 text-[2.3rem] font-black leading-[1.16] tracking-[-0.04em] sm:text-5xl"
            >
              我在9月25日
              <br />
              等你呀！
            </h2>
            <p className="mx-auto mt-4 max-w-sm text-[0.96rem] font-medium leading-7 text-muted-foreground">
              到时候一起吹蜡烛、吃蛋糕，我还要收好多好多抱抱！
            </p>

            <div className="date-ticket mt-8">
              <p className="date-number">25</p>
              <div className="text-left">
                <p className="text-lg font-black">2026年9月</p>
                <p className="mt-1 text-sm font-semibold text-muted-foreground">
                  星期五 11:30
                </p>
              </div>
            </div>
            <Countdown />

            <div className="venue-block mt-8">
              <p className="text-sm font-black text-primary">我们在这里见</p>
              <h3 className="mt-3 text-2xl font-black leading-snug tracking-[-0.03em] sm:text-3xl">
                5Senses武康花园餐厅
              </h3>
              <p className="mt-2 text-sm font-medium leading-6 text-muted-foreground">
                上海市徐汇区武康路100弄1号
              </p>
              <VenueActions />
            </div>
          </Reveal>
        </article>
      </section>

      <section className="card-stage" aria-labelledby="story-title">
        <article className="invitation-card paper-card flex min-h-[52rem] w-full max-w-[34rem] items-center px-6 py-14 sm:px-12">
          <Reveal className="relative z-10 w-full">
            <div className="text-left">
              <h2
                id="story-title"
                className="text-[2.15rem] font-black leading-tight tracking-[-0.04em] sm:text-5xl"
              >
                看看小时候的我
              </h2>
              <p className="mt-3 text-sm font-semibold leading-6 text-muted-foreground">
                小小的脸蛋，装着大大的快乐。
              </p>
            </div>

            <div className="early-collage mt-8">
              {earlyMoments.map((photo, index) => (
                <figure
                  key={photo.src}
                  className={`snapshot snapshot-early-${index + 1}`}
                >
                  <div className="snapshot-photo">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      fill
                      sizes={
                        index === 0
                          ? '(min-width: 640px) 420px, 80vw'
                          : '(min-width: 640px) 190px, 40vw'
                      }
                      className={`object-cover ${photo.position}`}
                    />
                  </div>
                  <figcaption>{photo.caption}</figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </article>
      </section>

      <section className="card-stage" aria-labelledby="growing-title">
        <article className="invitation-card paper-card flex min-h-[52rem] w-full max-w-[34rem] items-center px-6 py-14 sm:px-12">
          <Reveal className="relative z-10 w-full">
            <div className="text-right">
              <h2
                id="growing-title"
                className="text-[2.15rem] font-black leading-tight tracking-[-0.04em] sm:text-5xl"
              >
                我长大了一点点
              </h2>
              <p className="mt-3 text-sm font-semibold leading-6 text-muted-foreground">
                会坐、会爬，还会甜甜地笑。
              </p>
            </div>

            <div className="growing-collage mt-8">
              {growingMoments.map((photo, index) => (
                <figure
                  key={photo.src}
                  className={`snapshot snapshot-growing-${index + 1}`}
                >
                  <div className="snapshot-photo">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      fill
                      sizes={
                        index === 0 || index === 3
                          ? '(min-width: 640px) 420px, 80vw'
                          : '(min-width: 640px) 190px, 40vw'
                      }
                      className={`object-cover ${photo.position}`}
                    />
                  </div>
                  <figcaption>{photo.caption}</figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </article>
      </section>

      <section className="card-stage" aria-labelledby="closing-title">
        <article className="invitation-card paper-card flex min-h-[52rem] w-full max-w-[34rem] items-center justify-center px-7 py-14 text-center sm:px-14">
          <Reveal className="relative z-10 flex w-full max-w-md flex-col items-center">
            <figure className="closing-photo">
              <Image
                src="/photos/eleven-months.jpg"
                alt="快一岁的安安坐在地垫上微笑"
                loading="lazy"
                fill
                sizes="(min-width: 640px) 360px, 74vw"
                className="object-cover object-[50%_42%]"
              />
            </figure>
            <h2
              id="closing-title"
              className="mt-8 text-[2.4rem] font-black leading-[1.14] tracking-[-0.04em] sm:text-5xl"
            >
              记得来抱抱我呀！
            </h2>
            <p className="mt-4 max-w-sm text-[0.96rem] font-semibold leading-7 text-muted-foreground">
              我会把最好看的笑容留给你。9月25日，武康路见！
            </p>
            <p className="signature-note mt-7">安安爸爸妈妈 敬邀</p>
          </Reveal>
        </article>
      </section>
    </main>
  );
}
