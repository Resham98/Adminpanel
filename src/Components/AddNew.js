import React,{Component} from 'react';
import './App.css';
import { Layout } from 'antd';
import { Typography ,Input} from 'antd';
import { Menu ,Breadcrumb,Button,Dropdown} from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined ,DownOutlined} from '@ant-design/icons';
import { Select } from 'antd';
import { Table, Tag, Space } from 'antd';
import { Collapse } from 'antd';
import { Radio,Checkbox  } from 'antd';

import { UploadOutlined } from '@ant-design/icons';


function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}


const { Option, OptGroup } = Select;

const { SubMenu } = Menu;


const { Title } = Typography;


const { Header, Footer, Sider, Content } = Layout;
const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const text1=`The present book Objectives on Agricultural Engineering (Exclusively for Agri Graduates) is written primarily for those who have received more previous instructions in the field of examinations. Its purpose is to introduce the intelligence and knowledge to success in the competitive examinations. It contains more than 2000 multiple choice, fill in the blanks and true or false type question on four Divisions of Discipline of Agricultural Engineering as Soil and Water Conservation Engineering, Farm Machinery and Power, Protected Cultivation and Secondary Agricultural and Renewable Energy and Green Technology. This book should serve as a useful resource to the agriculture graduates appearing for various competitive exams such as ICAR, GATE, JRF and for their curriculum etc. We will fell more satisfaction if this book would serve the purpose of students to success in their various examinations.`;
const text2=`SOIL AND WATER CONSERVATION ENGINEERING`;
const text3=`Unit I: Surveying
Unit II: Soil Erosion
Unit III: Soil Conservation and Watershed Management
Unit IV: Irrigation and Drainage
Unit V: Wells and Pumps
FARM MACHINERY AND POWER 
Unit I: Farm Power and IC Engines
Unit II: Tractor and Functional Components
Unit III: Tillage Implements
Unit IV: Sowing and Intercultural Implements
Unit V: Plant Protection and Harvesting Equipment’s
PROTECTED CULTIVATION AND SECONDARY AGRICULTURE 
Unit I: Introduction to Protected Cultivation and Green houses
Unit II: Design of Greenhouses
Unit III: Application of Greenhouses
UNIT IV: Engineering Propertied of Food Materials
Unit V: Drying and Dehydration
Unit VI: Material Handling
RENEWABLE ENERGY AND GREEN TECHNOLOGY
Unit I: Introduction to Renewable Energy Sources
Unit II: Biochemical Energy Conversion
Unit III: Thermochemical Energy Conversion
Unit IV: Solar Energy Conversion
Unit V: Wind and other Renewable Energy Sources`;
function handleChange(value) {
  console.log(`selected ${value}`);
}

class App2 extends Component{

render() {
  return (
    <div className="App">
          
          <Layout>
          <Header style={{padding:10}}>   
             <Title style={{color:'white'}}level={5}>LOGO</Title>
          </Header>
            <Layout>
            <Sider>
                <Menu
               mode="inline"
               defaultSelectedKeys={['Dashboard']}

               >
                  <Menu.Item key="Dashboard">Dashboard</Menu.Item>
                  <SubMenu
          key="sub1"
          title={
            <span>
              <span>Products</span>
            </span>
          }
        >
          <Menu.Item key="1">Manage Books</Menu.Item>
         </SubMenu>
         <Menu.Item key="Ledgers">Ledgers</Menu.Item>

                </Menu>
            </Sider>
              <Layout>
              <Content style={{ padding: '0 20px' }}>
      <Breadcrumb style={{ margin: '0 0' }}>
      </Breadcrumb>
      <div  className="site-layout-content" style={{
            background:'#fff',
            padding: 2,
            margin:0,
            minHeight: 520,
          }}
        >
          <Collapse defaultActiveKey={['1']} onChange={callback}>
    <Panel header="Book Creation" key="1">
      <div>
      <Checkbox onChange={onChange}>Active/InActive</Checkbox>
      <Checkbox onChange={onChange}>Display/Hide</Checkbox>
      </div>
      <div>Book Name* :<Input style={{width:180,margin:5}}placeholder="Objectives on Agricultural Engineering: (Exclusively for Agriculture Graduates)" /> 
            Book Type : <Select defaultValue="lucy" style={{ width: 180,margin:5 }} onChange={handleChange}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Question Bank</Option>
          </Select>
          Book Code* : <Input style={{width:190,margin:5}}placeholder="7634a" />
      </div>
      <div>
        ISBN* :<Input style={{width:223,margin:5,}}placeholder="9788194377634" />
        EDITION* :<Input style={{width:190,margin:5}}placeholder="1" />
        VOLUME* :<Input style={{width:205,margin:5}}placeholder="1" />

      </div>
      <div>
        Size : <Select defaultValue="lucy" style={{ width: 230,margin:5 }} onChange={handleChange}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">AMERICAN ROYAL</Option>
          </Select>
        Weight :<Input style={{width:100,margin:5}}placeholder="150" /> <Select defaultValue="lucy" style={{ width: 90,margin :5}} onChange={handleChange}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Gms</Option>
          </Select>
        Binding : <Select defaultValue="lucy" style={{ width: 215,margin:5 }} onChange={handleChange}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Paper Bond</Option>
          </Select>
      </div>
      <div>
        Language* : <Select defaultValue="lucy" style={{ width: 190,margin:5 }} onChange={handleChange}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">ENGLISH</Option>
          </Select>
          Current Pub. Year  :<Input style={{width:140,margin:5}}placeholder="2020" /> 
          Ist Publishing Year  : <Input style={{width:150,margin:5}}placeholder="2020" />
      </div>
      <div>
      Retail Price*  :<Input style={{width:185,margin:5,}}placeholder="250.00" />
      Whole Sale Price   :<Input style={{width:148,margin:5}}placeholder="250.00" />
      Total Pages  :<Input style={{width:195,margin:5}}placeholder="10" />

      </div>

      <div>
      Color Pages    :<Input style={{width:185,margin:5}}placeholder="0" />
      Front Cover    :  <Button style={{width:185,margin:5}}>
      <UploadOutlined /> Click to Upload
    </Button>  

      Publisher*     :<Select defaultValue="lucy" style={{ width: 215,margin:5 }} onChange={handleChange}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Agrobios(India)</Option>
          </Select>

      </div>
      <div>
      Back Page    : <Button style={{width:185,margin:5}}>
      <UploadOutlined /> Click to Upload
    </Button>  
      Sample page    : <Button style={{width:185,margin:5}}>
      <UploadOutlined /> Click to Upload
    </Button>  
      Display On Homepage      :<Radio.Group style={{width:150,margin:5}}>
        <Radio value={1}>Yes</Radio>
        <Radio value={2}>No</Radio>
      </Radio.Group>
            </div>
<div>
Featured :<Radio.Group style={{width:200,margin:5}}>
        <Radio value={1}>Yes</Radio>
        <Radio value={2}>No</Radio>
      </Radio.Group>
      Forthcoming    :<Radio.Group style={{width:180,margin:5}}>
        <Radio value={1}>Yes</Radio>
        <Radio value={2}>No</Radio>
      </Radio.Group>
      New Release    :<Radio.Group style={{width:180,margin:5}}>
        <Radio value={1}>Yes</Radio>
        <Radio value={2}>No</Radio>
      </Radio.Group>
</div>

    </Panel>
    <Panel header="About Books" key="2">
      <p>{text1}</p>
    </Panel>
    <Panel header="Book Contents" key="3"> 
      <p>{text2}</p>
      <p>{text3}</p>
    </Panel>
    <Panel header="Subjects " key="4"> 
      <p>AGRICULTURAL SCIENCES</p>

    </Panel>
    <Panel header="Select Readership" key="5"> 
      <p>Entrepreneurs</p>
      <p>Extension Workers</p>
      <p>Field Workers</p>
      <p>General Readers</p>
      <p>PG Students</p>
      <p>Scientists and Researchers</p>
      <p>UG Students</p>
    </Panel>
    <Panel header="Select Author" key="6"> 
      <p></p>
    </Panel>
          </Collapse>


        


        
  </div>
    </Content>

    <Footer style={{ textAlign: 'center' }}>@Agrobios</Footer>
            </Layout>
      
      </Layout>
    </Layout>
</div>
  );
}
}

export default App2;
