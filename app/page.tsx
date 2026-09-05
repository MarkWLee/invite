import { Countdown } from '@/components/countdown';
import { InvitationBook } from '@/components/invitation-book';
import { VenueActions } from '@/components/venue-actions';
import Image from 'next/image';

function Photo({
  src,
  alt,
  caption,
  className = '',
  position = '50% 45%',
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  position?: string;
}) {
  return (
    <figure className={`keepsake ${className}`}>
      <div className="keepsake-image">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 600px) 400px, 85vw"
          className="object-cover"
          style={{ objectPosition: position }}
          draggable={false}
        />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export default function Home() {
  return (
    <InvitationBook>
      <section
        className="invitation-page cover-page"
        aria-labelledby="invitation-title"
      >
        <h1 id="invitation-title" className="sr-only">
          安安一周岁生日宴邀请函
        </h1>
        <Image
          src="/cartoon-invitation-annan-11.png"
          alt="嗨，我一岁啦！我是安安，2026年9月25日星期五上午11点，5Senses武康花园餐厅，上海市徐汇区武康路100弄1号。"
          width={941}
          height={1671}
          priority
          sizes="(min-width: 600px) 475px, 100vw"
          className="cover-art"
          draggable={false}
        />
      </section>

      <section
        className="invitation-page party-page"
        aria-labelledby="party-title"
      >
        <div className="party-layout">
          <header>
            <p className="hand-note">这次，我是小寿星哦</p>
            <h2 id="party-title" className="display-title">
              我的周岁派对
            </h2>
          </header>
          <time className="party-date" dateTime="2026-09-25T11:00:00+08:00">
            <span className="date-month">2026 · 09</span>
            <span className="date-day">
              25
              <span className="date-doodle" aria-hidden="true">
                ♡
              </span>
            </span>
            <span className="date-hour">星期五 · 上午 11 点</span>
          </time>
          <p className="party-message">
            蛋糕分你一大块，
            <br />
            抱抱要给我一个哦！
          </p>
          <div className="party-place">
            <p className="place-name">5Senses</p>
            <h3>武康花园餐厅</h3>
            <p className="address">上海市徐汇区武康路100弄1号</p>
            <VenueActions />
          </div>
          <Countdown />
        </div>
      </section>

      <section
        className="invitation-page baby-page"
        aria-labelledby="baby-title"
      >
        <div className="baby-layout">
          <header className="album-heading">
            <h2 id="baby-title" className="display-title">
              小小的我，
              <br />
              大大的爱。
            </h2>
            <p className="page-copy">刚来时，大家的怀抱就是我的全世界。</p>
          </header>
          <Photo
            className="first-photo"
            src="/photos/newborn.jpg"
            alt="刚出生不久的安安被家人抱在怀里"
            caption="初次见面，请多多抱抱"
            position="50% 34%"
          />
          <div className="baby-pair">
            <Photo
              src="/photos/hundred-days.jpg"
              alt="一百天的安安躺在花纹床单上微笑"
              caption="百天啦"
              position="50% 45%"
            />
            <Photo
              src="/photos/first-smile.jpg"
              alt="安安躺在枕头上开心微笑"
              caption="笑一个给你看"
            />
          </div>
        </div>
      </section>

      <section
        className="invitation-page growing-page"
        aria-labelledby="growing-title"
      >
        <div className="growing-layout">
          <header className="growing-heading">
            <h2 id="growing-title" className="display-title">
              看我，
              <br />
              <span>长大啦！</span>
            </h2>
            <p className="page-copy">每天都有一点点新本领。</p>
          </header>
          <div className="growth-spread">
            <Photo
              className="growth-main"
              src="/photos/growing.jpg"
              alt="安安趴着认真看向镜头"
              caption="抬起头，看看世界"
              position="50% 35%"
            />
            <Photo
              className="growth-winter"
              src="/photos/winter.jpg"
              alt="安安戴着红帽子依偎在家人怀里"
              caption="暖乎乎地过冬"
              position="50% 35%"
            />
            <Photo
              className="growth-sitting"
              src="/photos/summer-bed.jpg"
              alt="安安坐在粉色沙发上"
              caption="我会坐啦"
            />
            <Photo
              className="growth-playing"
              src="/photos/summer-play.jpg"
              alt="安安在家中开心玩耍"
              caption="忙着可爱"
            />
          </div>
        </div>
      </section>

      <section
        className="invitation-page hugs-page"
        aria-labelledby="hugs-title"
      >
        <div className="hugs-layout">
          <header>
            <p className="hand-note">最后，还想跟你说</p>
            <h2 id="hugs-title" className="display-title">
              等你来抱抱！
            </h2>
          </header>
          <Photo
            className="hugs-portrait"
            src="/photos/eleven-months.jpg"
            alt="快一岁的安安坐在地垫上微笑"
            position="50% 40%"
          />
          <div className="hugs-letter">
            <p>
              我已经准备好
              <br />
              一个大大的笑容，送给你。
            </p>
            <p className="see-you">9月25日，我们见面吧！</p>
            <p className="family-signature">
              爱你的安安<span>和爸爸妈妈</span>
            </p>
          </div>
        </div>
      </section>
    </InvitationBook>
  );
}
