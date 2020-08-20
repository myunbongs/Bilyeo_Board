# Bilyeo_Board

Bilyeo 프로젝트 전 협업을 위한 게시판 만들기! 

## 1. 장고, 리액트 프로젝트 생성하기

---

- django를 위한 VS code 설정하기!

[https://automationpanda.com/2018/02/08/django-projects-in-visual-studio-code/](https://automationpanda.com/2018/02/08/django-projects-in-visual-studio-code/)

---

- Terminal 1 (django)

$ mkdir board #폴더(board) 만들기

$ cd board 

$ mkdir backend

$ mkdir frontend

$ cd backend

$ python -m venv venv

$ source venv/Scripts/activate

$ pip install djangorestframework #[https://www.django-rest-framework.org](https://www.django-rest-framework.org/)/

$ django-admin startproject board #board 프로젝트 만들기(프로젝트 폴더 이름 'src'로 변경)

- django 프로젝트 내 코드

     1) 프로젝트 내 setting.py에 'rest_framework' 앱 추가

    ```
    INSTALLED_APPS = [
        ...
        'rest_framework',
    ]
    ```

     

     2) 프로젝트 내 urls.py에 include 불러오고 path 추가! 

    ```
    from django.urls import path, include

    urlpatterns = [
        ...
        path('api-auth/', include('rest_framework.urls')),
    ]
    ```

     

    3) 프로젝트 내 [settings.py](http://settings.py) 맨 하단에 REST_FRAMEWORK 추가

    ```
    REST_FRAMEWORK = {
        # Use Django's standard `django.contrib.auth` permissions,
        # or allow read-only access for unauthenticated users.
        'DEFAULT_PERMISSION_CLASSES': [
            'rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly'
        ]
    }
    ```

$ python [manage.py](http://manage.py/) migrate #확인용 

$ python [manage.py](http://manage.py/) runserver #확인용 

$ python [manage.py](http://manage.py/) startapp boardapp 

- django 프로젝트 내 코드

     1) 프로젝트 내 setting.py에 'boardapp' 앱 추가

    ```
    INSTALLED_APPS = [
        ...
        'boardapp',
    ]
    ```

     2) [models.py](http://models.py)에 Board 추가

    ```
    class Board(models.Model):
        title = models.CharField(max_length=120)
        content = models.TextField()

        def __str__(self):
            return self.title
    ```

    3) admin.py에 Board 등록

    ```
    from .models import Board

    admin.site.register(Board)
    ```

$ python [manage.py](http://manage.py/) makemigrations

$ python [manage.py](http://manage.py/) migrate

$ python [manage.py](http://manage.py/) createsuperuser

---

- Terminal 2 (react)

$ cd frontend

$ npm install 

$ rm -rf node_modules #오류시 이거 하고 다시 npm install

// run `npm audit fix` to fix them, or `npm audit` for details → 

$ `npm audit fix`

$ npx create-react-app board-app

---

## 2. Django 프로젝트 파일 수정 (초기 세팅)

1. boardapp 폴더에 api 폴더 생성
2. api 폴더에 '__init__.py', 'serializers.py', 'urls.py', 'views.py' 파일 생성 
    - [serializers.py](http://serializers.py) 코드

        ```jsx
        from rest_framework import serializers
        from boardapp.models import Board

        class BoardSerializer(serializers.ModelSerializer):
            class Meta:
                model = Board
                fields = ('title', 'content')
        ```

    - [views.py](http://views.py) 코드

        ```jsx
        from rest_framework.generics import ListAPIView, RetrieveAPIView
        from boardapp.models import Board
        from .serializers import BoardSerializer

        class BoardListView(ListAPIView):
            queryset = Board.objects.all()
            serializer_class = BoardSerializer

        class BoardDetailView(RetrieveAPIView):
            queryset = Board.objects.all()
            serializer_class = BoardSerializer
        ```

    - [urls.py](http://urls.py) 코드

        ```jsx
        from django.urls import path
        from .views import BoardListView, BoardDetailView

        urlpatterns = [
            path('', BoardListView.as_view()),
            path('<pk>', BoardDetailView.as_view()),
        ]
        ```

3. board 프로젝트 폴더의 [urls.py](http://urls.py)에 path 추가 

    ```jsx
    path('api/', include('boardapp.api.urls')),
    ```

- [http://127.0.0.1:8000/api/](http://127.0.0.1:8000/api/)

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6785351f-d0de-4c32-b2e0-03fafdb65ee5/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6785351f-d0de-4c32-b2e0-03fafdb65ee5/Untitled.png)

---

## 3.  React 프로젝트 파일 수정 (초기 세팅)

1. borad-app/src 폴더에 'containers', 'components' 폴더 생성

// 원활한 초기 세팅을 위해 [https://ant.design/](https://ant.design/)를 이용하였습니다!

- Terminal 2 (react)

  2.  $ npm install antd

  3. containers 폴더 내 'BoardListView.js' 생성

- 코드 보기

    ```jsx
    import React from 'react';
    import Board from '../components/Board';
    import axios from 'axios';

    const listData = [];
    for (let i = 0; i < 23; i++) {
      listData.push({
        href: 'https://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
          'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      });
    }

    class BoardList extends React.Component {

        state = {
            board: []
        }

        componentDidMount() {
            axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    board: res.data
                });
            })
        }

        render() {  
            return (
                <Board data={this.state.board} />
            )
        }
    }

    export default BoardList;
    ```

  4.  containers 폴더 내 'Layout.js' 생성

- 코드 보기

    ```jsx
    import React from 'react';
    import { Layout, Menu, Breadcrumb } from 'antd';

    const { Header, Content, Footer } = Layout;

    const CustomLayOut = (props) => {
        return (
            <Layout className="layout">
            <Header>
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
                <div className="site-layout-content">
                    {props.children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        );
    }

    export default CustomLayOut;
    ```

  5. components 폴더 내 'Board.js' 생성

- 코드 보기

    ```jsx
    import React from 'react';
    import { List, Avatar, Space } from 'antd';
    import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

    const IconText = ({ icon, text }) => (
        <Space>
          {React.createElement(icon)}
          {text}
        </Space>
    );

    const Board = (props) => {
        return (
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 3,
                }}
                dataSource={props.data}
                footer={
                <div>
                    <b>ant design</b> footer part
                </div>
                }
                renderItem={item => (
                <List.Item
                    key={item.title}
                    actions={[
                    <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                    <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                    <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    ]}
                    extra={
                    <img
                        width={272}
                        alt="logo"
                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    />
                    }
                >
                    <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.description}
                    />
                    {item.content}
                </List.Item>
                )}
            />
        );
    }

    export default Board;
    ```

  6.  App.js 파일 수정하기

- 코드 보기

    ```jsx
    import React, { Component } from 'react'; 
    import 'antd/dist/antd.css';
    import CustomLayOut from './containers/Layout';
    import BoardList from './containers/BoardListView';

    class App extends Component {
      render() {
        return(
        <div className="App">
          <CustomLayOut>
            <BoardList />
          </CustomLayOut>
        </div>
        );
      }
    }

    export default App;
    ```

---

## 4. Django 데이터 React로 연결하기

[https://github.com/adamchainz/django-cors-headers](https://github.com/adamchainz/django-cors-headers)

1. django-cors-headers 설치하기 
    - Terminal 1 (django)

    $ python -m pip install django-cors-headers

2. django 프로젝트 파일 수정하기 
    - django 프로젝트 내 코드

         1) 프로젝트 내 [settings.py](http://settings.py)에 'corsheaders' 앱 추가

        ```
        INSTALLED_APPS = [
        		...
            'corsheaders',
            ...
        ]
        ```

         

         2) 프로젝트 내 [settings.py](http://settings.py)의 MIDDLEWARE 맨 상단에

        ```
        MIDDLEWARE = [
            'corsheaders.middleware.CorsMiddleware',
            ...
        ]
        ```

         

        3) 프로젝트 내 [settings.py](http://settings.py) 맨 하단에 CORS_ORIGIN_ALLOW_ALL 추가

        ```
        CORS_ORIGIN_ALLOW_ALL = True
        ```

- ex) [http://localhost:3000/](http://localhost:3000/)

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1256c726-52f2-4e5a-9adf-daba13184ac9/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1256c726-52f2-4e5a-9adf-daba13184ac9/Untitled.png)

게시글 내용이 추가했던 게시글과 동기화 되었다면 완료!