import { DownCircleFilled } from '@ant-design/icons';
import { Button, Dropdown, MenuProps } from 'antd';

const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            EN
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          JP
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          CN
        </a>
      ),
    },
    {
        key: '4',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            BM
          </a>
        ),
      },
  ];

function LanguageSwitcher(){
    return <div>
        <Dropdown menu={{ items }} placement="bottomLeft">
            <Button type="text" icon={<DownCircleFilled  />}>Language Switcher</Button>
        </Dropdown>
    </div>
}

export default LanguageSwitcher