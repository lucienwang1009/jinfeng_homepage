import React from 'react';
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";

import { UserOutlined } from '@ant-design/icons';
import ReactDom from 'react-dom';
const HeadImageWrap = styled.div`
  & img{
    width: 180px;
    height: 160px;
    border-radius: 70px;
    margin-bottom: 10px;

  }
`;

export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: "logo.png",
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item0',
        className: 'header0-item',
        children: {
          // href: '#Content0_0',
          children: [
            {
              children: [
                (
                  <Link
                    to="Content0_0"
                    smooth={true}
                  >
                  </Link>
                ), (<span>
                  <p>产品与服务</p>
                </span>)
              ],
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item1',
        className: 'header0-item',
        children: {
          // href: '#Teams0_0',
          children: [
            {
              children: [
                (
                  <Link
                    to="Teams0_0"
                    smooth={true}
                  >
                  </Link>
                ),
                (
                  <span>
                    <p>客户介绍</p>
                  </span>)
              ],
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item2',
        className: 'header0-item',
        children: {
          //  href: '#Teams1_0',
          children: [
            {
              children: [(
                <Link
                  to="Teams1_0"
                  smooth={true}
                >
                </Link>

              ),
              (<span>
                <p>团队介绍</p>
              </span>)],
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item3',
        className: 'header0-item',
        children: {
          // href: '#',
          children: [
            {
              children: [
                (<Link
                  to="Content3_0"
                  smooth={true}
                >
                </Link>
                ),
                (
                  <span>
                    <p>联系我们</p>
                  </span>
                ),

              ],
              name: 'text'

            },
          ],
        },
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner01DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    // children: <img src="partners/Machine Learning.jpg" width="50%" alt="img"/>,
  },
  content: {
    className: 'banner0-content',
    children: '湖南锦丰信息科技有限公司',
  },
  button: { className: 'banner0-button', children: 'Learn More' },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '产品与服务' }],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                <img src="partners/工业数字化.jpg" />
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <span>
                    <p>&nbsp;工业数字化</p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <span>
                    <span>
                      <p>
                        帮助产业发现如何利用人工智能等新信息科技将庞大数据转化成降低运营成本、提高客户体验的产品，改变商业模式，开发新盈利点的新一代企业工具
                      </p>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                <img src="partners/技术咨询.jpg" />
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>技术咨询</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <span>
                    <p>
                      拥有国际一流的研究学者和工程师，为国内、国际知名企业提供组合优化、因果推断及分布式算法等计算与智能领域的相关技术咨询
                    </p>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                <img src="partners/前沿技术培训.jpg" />
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '前沿技术培训',
            },
            {
              name: 'content',
              children: '致力于成为世界顶尖的计算智能科研机构，邀请全球知名学者分享各个领域的最新研究进展，已开办一系列的学术讲座、读书会、在线专业论文阅读等活动，可为企业提供人工智能、机器学习及区块链等各种前沿技术培训',
            },
          ],
        },
      },
    ],
  },
};
export const Teams00DataSource = {
  wrapper: { className: 'home-page-wrapper teams0-wrapper' },
  OverPack: { playScale: 0.3, className: 'home-page teams0' },
  page: { className: 'home-page teams0' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>客户介绍</p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
      },
    ],
  },
  BannerAnim: {
    className: 'banner-anim',
    children: [
      {
        name: 'elem0',
        className: 'teams0-banner-user-elem',
        titleWrapper: {
          className: 'teams0-content-wrapper',
          children: [
            {
              name: 'image',
              children:
                <img src="partners/中国中车.jpg"></img>,
              className: 'teams0-image',
            },
            {
              name: 'content',
              children:
                '中国中车股份有限公司，是经国务院同意，国务院国资委批准，由中国南车股份有限公司、中国北车股份有限公司按照对等原则合并组建的A+H股上市公司',
              className: 'teams0-content',
            },
            { name: 'title', children: '中国中车', className: 'teams0-h1' },
            {
              name: 'content2',
              children: '中国轨道交通领域龙头企业',
              className: 'teams0-content',
            },
          ],
        },
      },
      {
        name: 'elem1',
        className: 'teams0-banner-user-elem',
        titleWrapper: {
          className: 'teams0-content-wrapper',

          children: [
            {
              name: 'image',
              children:
                <img src="partners/Binance.jpg"></img>,
              className: 'teams0-image',
            },
            {
              name: 'content',
              children:
                'Binance，中文名称：币安，是Binance Holdings Limited公司旗下是一个全方位的区块链生态品牌，创立于2017年，旨在成为区块链世界的基础构建者，推动区块链行业发展，实现价值的自由流通，向全球提供广泛的数字货币交易、币种信息、区块链教育、区块链项目孵化、区块链慈善基金等服务。',
              className: 'teams0-content',
            },
            { name: 'title', children: 'Binance', className: 'teams0-h1' },
            {
              name: 'content2',
              children: '全球区块链领域独角企业',
              className: 'teams0-content',
            },
          ],
        },
      },
    ],
  },
};

export const Teams10DataSource = {
  wrapper: { className: 'home-page-wrapper teams1-wrapper' },
  page: { className: 'home-page teams1' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '团队介绍' }],
  },
  children: [
    {
      name: 'content',
      className: 'title-content',
      children: (
        <span>
          <p>&nbsp;公司创始人团队成员简介</p>
        </span>
      ),
    },
  ],
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
                <HeadImageWrap>
                  <img src="partners/王彧弋博士.jpg" />
                </HeadImageWrap>,
            },
            { name: 'title', className: 'teams1-title', children: '王彧弋' },
            {
              name: 'content',
              className: 'teams1-job',
              children: '公司创始人、CEO',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                ' 男，苏黎世联邦理工大学计算机科学博士，人工智能、区块链专家。师从瑞士著名计算机科学家、苏黎世联邦理工大学教授Roger Wattenhofer ',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
                <HeadImageWrap>
                  <img src="partners/马鋆溥博士.jpg" />
                </HeadImageWrap>,
            },
            { name: 'title', className: 'teams1-title', children: '马鋆溥' },
            {
              name: 'content',
              className: 'teams1-job',
              children: '联合创始人、CTO',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children: '男，德国慕尼黑大学计算机科学博士，前西门子高级研究员',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
                <HeadImageWrap>
                  <img src="partners/陈阳昕.jpg" />
                </HeadImageWrap>,
            },
            { name: 'title', className: 'teams1-title', children: '陈阳昕' },
            {
              name: 'content',
              className: 'teams1-job',
              children: '首席产品设计师',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                '前苹果公司核心移动产品设计师，曾参与iPhone7核心设计',
            },
          ],
        },
      },
    ],
  },
};

export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: [
      {
        name: "copyright1",
        children: (
          <span>
            ©2020 by <a href="https://xin.baidu.com/company_detail_31243928268318?rq=ef&pd=ee&from=ps" >锦丰科技</a> All Rights Reserved &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://map.baidu.com/search/%E6%B9%96%E5%8D%97%E7%9C%81%E6%A0%AA%E6%B4%B2%E5%B8%82%E7%9F%B3%E5%B3%B0%E5%8C%BA%E7%94%B0%E5%BF%83%E9%AB%98%E7%A7%91%E5%9B%AD/@12593195.084661353,3216495.1950000003,14.91z?querytype=s&wd=%E6%B9%96%E5%8D%97%E7%9C%81%E6%A0%AA%E6%B4%B2%E5%B8%82%E7%9F%B3%E5%B3%B0%E5%8C%BA%E7%94%B0%E5%BF%83%E9%AB%98%E7%A7%91%E5%9B%AD&c=131&pn=0&device_ratio=2&da_src=shareurl" >公司地址：</a> 湖南省株洲市石峰区田心高科园 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           公司联系方式： 0731-22161180
          </span>
        ),
      },
    ]
  },
};
