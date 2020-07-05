import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import { AppContext } from '../context/BlogContext'
import { IBlog, IPost } from '../interfaces/blog'
import { Types } from "../reducers/index";

const IndexScreen = () => {
  const { state, dispatch } = useContext(AppContext)

  const addBlogPost = () => {
    dispatch({
      type: Types.Create,
      payload: {
        title: 'New Post',
        content: ''
      }
    });
  }

  const renderPost = ({ item }: { item: IPost}) => {
    return (
      <Text>{item.title}</Text>
    )
  }

  const title='New Title'
  const content=''

  return (
    <View>
      <Button title='Add Post' onPress={() => addBlogPost()} />
      <FlatList
        data={state.posts}
        keyExtractor={(blogPost:IPost | any) => blogPost.title}
        renderItem={renderPost}
      />
    </View>
  )
}

const styles = StyleSheet.create({
})

export default IndexScreen