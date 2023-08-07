import { DownCircleFilled } from '@ant-design/icons';
import { Button, Dropdown, MenuProps } from 'antd';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a rel="noopener noreferrer" onClick={()=>{i18next.changeLanguage('en-US')}}>
            EN
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a rel="noopener noreferrer" onClick={()=>{i18next.changeLanguage('jp-JP')}} >
          JP
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a rel="noopener noreferrer" onClick={()=>{i18next.changeLanguage('cn-CN')}} >
          CN
        </a>
      ),
    },
    {
        key: '4',
        label: (
          <a rel="noopener noreferrer" onClick={()=>{i18next.changeLanguage('bm-BM')}}>
            BM
          </a>
        ),
      },
  ];

function LanguageSwitcher(){
    const {t} = useTranslation();
  
    return <div>
        <Dropdown menu={{ items }} placement="bottomLeft">
            <Button type="text" icon={<DownCircleFilled  />}>{t('language.switcher.title')}</Button>
        </Dropdown>
    </div>
}

export default LanguageSwitcher