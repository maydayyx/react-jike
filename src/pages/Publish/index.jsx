import {
    Card, Breadcrumb, Form, Button, Radio, Input, Upload, Space, Select, message
} from 'antd'
import {PlusOutlined} from '@ant-design/icons'
import {Link, useSearchParams} from 'react-router-dom'
import './index.scss'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import {useEffect, useState} from "react";
import {createArticleAPI, getArticleById} from "@/apis/article.js";
import {useChannel} from "@/hooks/useChannel.js";

const {Option} = Select

const Publish = () => {
    const {channelList} = useChannel()
    //提交表单
    const onFinsh = (val) => {
        //校验图片数量是否和模式相等
        if(imageList.length!==imageType) return message.warning('封面数量不匹配！')
        const {title,content,channel_id} = val
        const reqData = {
            title: title,
            content: content,
            cover: {
                type: imageType ,
                images: imageList.map(item=>item.response.data.url)
            },
            channel_id: channel_id
        }
        createArticleAPI(reqData)
    }
    //上传图片
    const [imageList,setImageList] = useState([])
    const onUploadChange = (val) => {
        setImageList(val.fileList)
    }
    //选择图片类型
    const [imageType,setImageType] = useState(0)
    const onTypeChange = (e) => {
        setImageType(e.target.value)
    }

    //回填数据
    const [searchParams] = useSearchParams()
    const articleId = searchParams.get('id')
    const [form] = Form.useForm()
    useEffect(() => {
       async function getArticleDetail() {
           const res = await getArticleById(articleId)
           const data = res.data
           form.setFieldsValue({
               ...data,
               type:data.cover.type
           })
           setImageType(data.cover.type)
           setImageList(data.cover.images.map(url=>{
               return { url}
           }))
       }
       getArticleDetail()
    }, [articleId,form]);
    return (<div className="publish">
        <Card
            title={<Breadcrumb items={[{title: <Link to={'/'}>首页</Link>}, {title: '发布文章'},]}
            />}
        >
            <Form
                labelCol={{span: 4}}
                wrapperCol={{span: 16}}
                initialValues={{type: 0}}
                onFinish={onFinsh}
                form={form}
            >
                <Form.Item
                    label="标题"
                    name="title"
                    rules={[{required: true, message: '请输入文章标题'}]}
                >
                    <Input placeholder="请输入文章标题" style={{width: 400}}/>
                </Form.Item>
                <Form.Item
                    label="频道"
                    name="channel_id"
                    rules={[{required: true, message: '请选择文章频道'}]}
                >
                    <Select placeholder="请选择文章频道" style={{width: 400}}>
                        {
                            channelList.map(item => (
                                <Option key={item.id} value={item.id}>{item.name}</Option>
                            ))
                        }
                    </Select>
                </Form.Item>
                <Form.Item label="封面">
                    <Form.Item name="type">
                        <Radio.Group onChange={onTypeChange}>
                            <Radio value={1}>单图</Radio>
                            <Radio value={3}>三图</Radio>
                            <Radio value={0}>无图</Radio>
                        </Radio.Group>
                    </Form.Item>
                    {imageType>0&&
                    <Upload
                        name='image'
                        listType="picture-card"
                        showUploadList
                        action={'http://geek.itheima.net/v1_0/upload'}
                        onChange={onUploadChange}
                        maxCount={imageType}
                        fileList={imageList}
                    >
                        <div style={{ marginTop: 8 }}>
                            <PlusOutlined />
                        </div>
                    </Upload>
                    }
                </Form.Item>
                <Form.Item
                    label="内容"
                    name="content"
                    rules={[{required: true, message: '请输入文章内容'}]}
                >
                    <ReactQuill
                        className="publish-quill"
                        theme="snow"
                        placeholder="请输入文章内容"
                    />
                </Form.Item>

                <Form.Item wrapperCol={{offset: 4}}>
                    <Space>
                        <Button size="large" type="primary" htmlType="submit">
                            发布文章
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </Card>
    </div>)
}

export default Publish