import { Avatar, Button, Layout, Row } from 'antd';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { removeUser } from '@/services/auth.service';
import { useRouter } from 'next/navigation';
const { Header: AndHeader } = Layout;
const Header = () => {
    const router = useRouter()
    const logOut = () => {
        removeUser()
        router.push('/login')
    }

    const items: MenuProps['items'] = [{
        key: '0',
        label: <Button onClick={logOut} type='text' danger>Logout</Button>
    }]
    return (
        <AndHeader>
            <Row justify='end' align='middle' style={{ height: "100%" }}>
                <Dropdown menu={{ items }}>
                    <Space wrap size={16}>
                        <a >
                            <Avatar size="large" icon={<UserOutlined />} />
                        </a>
                    </Space>
                </Dropdown>
            </Row>
        </AndHeader>
    )
};

export default Header;
