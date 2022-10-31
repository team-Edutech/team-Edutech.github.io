
import { Title } from '@mantine/core';
import useStyles from './bottomStyle';

const Bottom = () => {
  const {classes, cx} = useStyles();

  const contentInWordBalloon = [
    ["개발자 취업 고민", "멘토에게 물어보기", require("../../static/image/logo/SlackC.png")],
    ["결과물 피드백", "받아보기", require("../../static/image/logo/SlackC.png")],
    ["로드맵, 수업", "문의하기", require("../../static/image/logo/NaverCafe.png")],
    ["1:1", "문의하기", require("../../static/image/logo/KakaoTalk.png")],
  ]
  const WordBalloon = (titleTop: string, titleBottom: string, iconPath: string) => (
    <div key={titleTop+titleBottom} className={classes.wordBalloon}>
      <Title className={classes.wordBallonTitle}>
        {titleTop}
        <br/>
        {titleBottom}
      </Title>
      <img className={classes.icon} src={iconPath} alt={iconPath} />
    </div>
  );

  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <div className={classes.contentLeft}>
          <Title className={classes.category}>SUPER COMMUNITY</Title>
          <Title className={cx(classes.title, classes.desktop)}>
            24시간
            <br />
            슈코와 얘기하세요.
          </Title>
          <Title className={cx(classes.title, classes.mobile)}>
            24시간 슈코와
            <br />
            얘기하세요.
          </Title>
        </div>
        <div className={classes.contentRight}>
          <div className={classes.wordBalloons}>
            {
              contentInWordBalloon.map(
                (each) => {
                  const [titleTop, titleBottom, iconPath] = each;
                  return WordBalloon(titleTop, titleBottom, iconPath);
                }
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bottom;
