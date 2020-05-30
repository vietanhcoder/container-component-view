import React from 'react';
import PropTypes from 'prop-types';

import { Divider, Col, Row, Card, Button, Avatar } from 'antd';

import PieChart from '../../../components/molecules/Charts/PieChart';

const data = [
  { name: 'React', value: 7 },
  { name: 'Angular', value: 3 },
  { name: 'Typescript', value: 3 },
  { name: 'CSS', value: 7 },
  { name: 'Javascript', value: 6 },
];

const colors = ['#0088FE', '#C3002F', '#0163B2', '#41A4CF', '#F7D408'];

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p">{title}:</p>
    {content}
  </div>
);

DescriptionItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.any.isRequired,
};

const Profile = () => {
  return (
    <div className="profile">
      <Row>
        <Col lg={16} xs={24}>
          <Card title="Profile">
            <p className="profile__title">Account</p>
            <Row>
              <Col lg={12} xs={24}>
                <DescriptionItem title="Username" content="admin" />
              </Col>
              <Col lg={12} xs={24}>
                <DescriptionItem title="Role" content="ADMIN" />
              </Col>
            </Row>
            <Divider />
            <p className="profile__title">Personal</p>
            <Row>
              <Col lg={12} xs={24}>
                <DescriptionItem title="First Name" content="Truong" />
              </Col>
              <Col lg={12} xs={24}>
                <DescriptionItem title="Last Name" content="Nguyen Nhat" />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <DescriptionItem title="Address" content="xxxxx" />
              </Col>
            </Row>
            <Row>
              <Col lg={12} xs={24}>
                <DescriptionItem title="City" content="TPHCM" />
              </Col>
              <Col lg={12} xs={24}>
                <DescriptionItem title="Country" content="Viet Nam" />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <DescriptionItem title="Birthday" content="November 18, 1988" />
              </Col>
            </Row>
            <Divider />
            <p className="profile__title">Company</p>
            <Row>
              <Col lg={12} xs={24}>
                <DescriptionItem title="Position" content="Software Engineer" />
              </Col>
              <Col lg={12} xs={24}>
                <DescriptionItem title="Department" content="PPPT" />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <DescriptionItem
                  title="Skills"
                  content="HTML/CSS, SCSS, BEM, Javascript, Jquery, Angular, ReactJS, React Typescript, React Native, Gulp, Webpack, CreateJS, PixiJS, etc."
                />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div className="responsiveContainer">
                  <PieChart data={data} colors={colors} outerRadius={150} />
                </div>
              </Col>
            </Row>
            <Divider />
            <p className="profile__title">Contacts</p>
            <Row>
              <Col lg={12} xs={24}>
                <DescriptionItem title="Email" content="nhattruong1811@gmail.com" />
              </Col>
              <Col lg={12} xs={24}>
                <DescriptionItem title="Phone Number" content="0907343462" />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <DescriptionItem
                  title="Github"
                  content={
                    <a href="https://github.com/nhattruongniit/">
                      https://github.com/nhattruongniit
                    </a>
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <DescriptionItem title="Skype" content="nhattruongniit" />
              </Col>
            </Row>
            <Divider />
            <Row>
              <Col span={24}>
                <Button type="primary" size="middle">
                  Update Profile
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col lg={7} xs={24} className="ant-col-profile">
          <Card>
            <div className="profile__avatar">
              <Avatar size={130} src="/images/avatar.jpg" />
            </div>
            <div className="profile__info">
              <div className="profile__info__regency">CEO / CO-FOUNDER</div>
              <div className="profile__info__name">Nguyen Nhat Truonng</div>
              <div className="profile__info__bio">
                We don&lsquo;t be scared of the truth because we need to restart the human
                foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed
                design.
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
