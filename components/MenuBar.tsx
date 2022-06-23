import "antd/dist/antd.css";
import { DownOutlined, SmileOutlined ,AppstoreOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";

const menuCasino = (
  <Menu
    items={[
      {
        key: "1",
        icon="{<AppstoreOutlined />}",
        label: (
          <p>
            Stake Originals
          </p>
        ),
      },
      {
        key: "2",
        label: (
          <p>
            Stake Exclusive
          </p>
        ),
      },
      {
        key: "3",
        label: (
          <p>
            Slots
          </p>
        ),
      },
      {
        key: "4",
        label: (
          <p>
            Live Casino
          </p>
        ),
      },
    ]}
  />
);

const menuSports = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <p>
            MLB
          </p>
        ),
      },
      {
        key: "2",
        label: (
          <p>
            Superliga
          </p>
        ),
      },
      {
        key: "3",
        label: (
          <p>
            NHL
          </p>
        ),
      }
    ]}
  />
); 

const menuPromotions = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <p>
              %50k Weekly Giveway
            </p>
          ),
        },
        {
          key: "2",
          label: (
            <p>
              %100k Race - 24 Hours
            </p>
          ),
        },
        {
          key: "3",
          label: (
            <p>
              View All
            </p>
          ),
        }
      ]}
    />
  ); 

function MenuBar() {
  return (
    <>
      <div className="flex justify-evenly items-center pl-5 pr-5 lg:pl-10 lg:pr-10 pt-4 pb-4 text-white shadow-lg">
        <Dropdown overlay={menuCasino} trigger={['click']}>
            <Space className="cursor-pointer" icon={AppstoreOutlined}>Casino</Space>
        </Dropdown>

        <Dropdown overlay={menuSports} trigger={['click']}>
            <Space className="cursor-pointer">Sports</Space>
        </Dropdown>

        <Dropdown overlay={menuPromotions} trigger={['click']}>
            <Space className="cursor-pointer">Promotions</Space>
        </Dropdown>
      </div>
    </>
  );
}

export default MenuBar;
