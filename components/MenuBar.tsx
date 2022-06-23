import "antd/dist/antd.css";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";

const menuCasino = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <p>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg> Stake Originals
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
            <Space className="cursor-pointer">Casino</Space>
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
