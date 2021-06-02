import React from 'react';

import { withRouter } from 'react-router-dom';
import { InstagramOutlined } from '@ant-design/icons';

import './Info.css';

const Info = () => {
    return (
        <div className="main_text">
            <div className="main_title">
                <h2 className="title">
                    <strong>코잉쿠(cOingkoo)</strong>
                </h2>
            </div>
            <div className="introduce">
                <h2 className="title">1. 개요</h2>
                <p>
                    프론트 개발자, 백앤드 개발자의 협업 프로젝트 코잉쿠(cOingkoo)는 개인의 실력
                    향상과 사이트 배포등을 실습하기 위해 제작된 사이트이다. 각각의 컴포넌트의 이해,
                    css적용, api이용, 리덕스, 데이터베이스 사용 등을 직접 다뤄보는 것이 주된
                    프로젝트의 목표이다.
                </p>
                <p>
                    프로젝트는 나날이 증가하는 암호화폐와, 암호화폐투자자의 증가로 인해 암호화폐의
                    대한 정보, 더 나아가 거래소들의 정보 등을 한눈에 알아보기 쉽게 제공해주고자 만든
                    프로젝트이다.
                </p>
            </div>
            <div className="introduce">
                <h2 className="title">2. 상세</h2>
                <p>
                    최근 몇년 전 부터 시작된 암호화폐의 붐은 2021년을 기준으로 사상 최고치를
                    기록하였다. 비트코인은 사상 최고가 8천만원을 돌파하였고, 이더리움은 5백만원대를
                    기록하였다.
                </p>
                <p>
                    하지만 최근 비트코인의 투자자들의 돌연 매도 소식과, 각종 나라들의 제약으로 인해
                    하락세를 겪고있다. 비트코인은 최고가를 기준으로 50%나 떨어졌으며, 다른
                    알트들또한 많게는 80%까지의 손해를 기록하고 있다.
                </p>
                <p>
                    더이상 암화폐의 개미 투자자들의 돈을 기부만 할 수는 없는 상황이기 때문에 신중한
                    코인에 대한 이해와 거래소 등을 파악하여야 한다.
                </p>
                <p>
                    코잉쿠(cOingkoo)의 메인페이지에서 코인의 시세, 차트, 코인의 정보등을 파악하며
                    커뮤니티를 통한 투자자들간의 소통, 코인관련 기사를 통한 트랜드 파악, 거래소의
                    신뢰도를 바탕으로 자신에게 맞는 거래소를 파악하며 투자에 더 신중하게 다가가야
                    한다.
                </p>
                <p>
                    앞으로 추가될 프로젝트를 통해 코잉쿠(cOingkoo)의 활용성을 더욱이 확장시킬
                    계획이다.
                </p>
            </div>
            {/* <div className="introduce">
                <h2 className="title">3. 원인</h2>
                <p>
                    가장 큰 원인을 한 마디로 요약하자면 국내의 높은 수요 + 사실상 막혀 있는
                    재정거래(arbitrage) 때문이라 할 수 있다.
                </p>
                <p>
                    정상적인 시장이라면, 국가간 가격차이가 발생하는 즉시 차익을 노리고 싼 데서 사서
                    비싼 데서 파는 재정거래가 발생하므로 곧 가격차이가 해소되게 마련이다. 직접
                    실물이 오가야 하는 것도 아닌, 온라인상에서 모든 것이 처리 가능한 암호화폐라면
                    특히 더 쉬워야 정상이다. 그러나 가상화폐 시장은 외국인 거래가 막혀있으며,
                    거래소가 유동성을 공급하는것도 불법이며, 외화를 이용해 외국 거래소에서 구매하는
                    것 또한 외화유출및 환치기로 처벌받을 수 있기 때문이다.
                </p>
                <p>
                    하지만 일부 투자자들은 프리미엄을 노린 차익거래를 시도하기도 한다. 바로
                    프리미엄이 낮을때 원화로 비트코인을 구매한 후 외국 거래소에서 달러로 바꿔두고,
                    프리미엄이 높을때 달러를 비트코인으로 들여와 원화로 바꾸는 형식. 커뮤니티에서는
                    보따리꾼이라고도 한다. 해당 방법은 환율 및 전송시간, 거래소 신뢰도 등으로
                    무위험은 아니지만 어느정도 수익이 난다고 알려져있으며, 이런 거래로 인해
                    프리미엄이 일정 수치로 유지되고 있다. 다만, 2018년 초에는 엄청난 자금 유입으로
                    인해 보따리꾼들이 전부 원화로 바꿨음에도 프리미엄이 치솟아 한때 60%에 달한적도
                    있었다.
                </p>
            </div> */}
            <div>
                <h2 className="title">3. 개발자</h2>
                <div className="dev_info">
                    <div classNale="insta">
                        지한솔(front-end) :
                        <a href="https://www.instagram.com/han_solbangul/">
                            <InstagramOutlined
                                style={{ marginLeft: '4px', marginRight: '4px', color: 'black' }}
                            />
                        </a>
                    </div>
                    <div classNale="insta">
                        전범구(back-end) :
                        <a href="https://www.instagram.com/wjsqjarn/">
                            <InstagramOutlined
                                style={{ marginLeft: '4px', marginRight: '4px', color: 'black' }}
                            />
                        </a>
                    </div>
                    <div classNale="insta">
                        안재현(mento) :
                        <a href="https://www.instagram.com/97_jaehyeons/">
                            <InstagramOutlined
                                style={{ marginLeft: '4px', marginRight: '4px', color: 'black' }}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(Info);
