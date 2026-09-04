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
    caption: '看看世界',
    position: 'object-[50%_42%]',
  },
  {
    src: '/photos/winter.jpg',
    alt: '安安戴着红色帽子依偎在家人怀里',
    caption: '暖乎乎',
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
    <main className="page-deck">
      <section className="page-slide" aria-labelledby="invitation-title">
        <article className="poster-card hero-media">
          <h1 id="invitation-title" className="sr-only">
            安安一周岁生日宴邀请函
          </h1>
          <Image
            src="/cartoon-invitation-annan-11.png"
            alt="安安一周岁生日邀请函，2026年9月25日上午11点，5Senses武康花园餐厅"
            width={941}
            height={1671}
            priority
            sizes="(min-width: 640px) 500px, calc(100vw - 16px)"
            className="poster-image"
          />
        </article>
      </section>

      <section
        id="details"
        className="page-slide"
        aria-labelledby="details-title"
      >
        <article className="page-card illustrated-card detail-page">
          <Reveal className="page-content detail-content">
            <div className="details-sheet">
              <p className="scribble-note">安安的生日小纸条</p>
              <h2 id="details-title" className="page-title text-center">
                9月25日，等你呀！
              </h2>
              <p className="page-subtitle text-center">
                一起吹蜡烛、吃蛋糕，我还要收好多好多抱抱！
              </p>

              <time
                className="date-ticket"
                dateTime="2026-09-25T11:00:00+08:00"
              >
                <span className="date-number">25</span>
                <span className="date-copy">
                  <span className="date-month">2026年9月</span>
                  <span className="date-time">星期五 上午11点</span>
                </span>
              </time>
              <Countdown />

              <div className="venue-block">
                <p className="venue-kicker">我们在这里见</p>
                <h3 className="venue-title">5Senses武康花园餐厅</h3>
                <p className="venue-address">上海市徐汇区武康路100弄1号</p>
                <VenueActions />
              </div>
            </div>
          </Reveal>
        </article>
      </section>

      <section className="page-slide" aria-labelledby="story-title">
        <article className="page-card illustrated-card story-page">
          <Reveal className="page-content story-content">
            <header className="story-heading">
              <p className="chapter-note">我的迷你成长册</p>
              <h2 id="story-title" className="page-title">
                看看小时候的我
              </h2>
              <p className="page-subtitle">小小一团，也能装下好多好多快乐。</p>
            </header>

            <div className="early-collage">
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
                          ? '(min-width: 640px) 260px, 58vw'
                          : '(min-width: 640px) 210px, 34vw'
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

      <section className="page-slide" aria-labelledby="growing-title">
        <article className="page-card illustrated-card growing-page">
          <Reveal className="page-content story-content">
            <header className="story-heading growing-heading">
              <p className="chapter-note">后来呀</p>
              <h2 id="growing-title" className="page-title">
                咻！我长大了一点点
              </h2>
              <p className="page-subtitle">会坐、会爬，还学会了甜甜地笑。</p>
            </header>

            <div className="growth-journey">
              <figure className="growth-feature">
                <div className="growth-feature-photo">
                  <Image
                    src={growingMoments[0].src}
                    alt={growingMoments[0].alt}
                    loading="lazy"
                    fill
                    sizes="(min-width: 640px) 360px, 72vw"
                    className={`object-cover ${growingMoments[0].position}`}
                  />
                </div>
                <figcaption>先抬起头，认真看看这个世界</figcaption>
              </figure>

              <div className="growth-chapters">
                {growingMoments.slice(1).map((photo, index) => (
                  <figure
                    key={photo.src}
                    className={`growth-chapter growth-chapter-${index + 1}`}
                  >
                    <div className="growth-chapter-photo">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        loading="lazy"
                        fill
                        sizes="(min-width: 640px) 150px, 29vw"
                        className={`object-cover ${photo.position}`}
                      />
                    </div>
                    <figcaption>{photo.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </Reveal>
        </article>
      </section>

      <section className="page-slide" aria-labelledby="closing-title">
        <article className="page-card illustrated-card closing-page">
          <Reveal className="page-content closing-content">
            <figure className="closing-photo" aria-label="快一岁的安安">
              <Image
                src="/photos/eleven-months.jpg"
                alt="快一岁的安安坐在地垫上微笑"
                loading="lazy"
                fill
                sizes="(min-width: 640px) 340px, 76vw"
                className="object-cover object-[50%_42%]"
              />
            </figure>
            <div className="closing-note">
              <h2 id="closing-title" className="page-title text-center">
                记得来抱抱我呀！
              </h2>
              <p className="page-subtitle text-center">
                我把最好看的笑容留给你。9月25日，武康路见！
              </p>
              <p className="signature-note">安安爸爸妈妈 敬邀</p>
            </div>
          </Reveal>
        </article>
      </section>
    </main>
  );
}
