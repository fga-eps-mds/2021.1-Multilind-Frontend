import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WordService } from '../../services';
import { GoBack, TopBar, ListWords, SearchBar } from '../../components';
import { removeAccent, FilterListSearch } from '../../utils';

export function WordsScreen() {
  const route = useRoute();
  const letter = route.params?.alphabetParam.name;
  const language = route.params?.language;
  const [words, setWords] = useState([]);
  const [wordSearch, setWordSearch] = useState('');

  useEffect(() => {
    async function getWords() {
      const response = await WordService.getAllWords(language.id_lingua);
      setWords(response[0].palavras);
    }
    getWords();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <GoBack />
        <TopBar>{letter}</TopBar>
      </View>
      <View>
        <SearchBar
          placeholder="Pesquisar uma Palavra"
          onChange={setWordSearch}
        />

        <ScrollView>
          <ListWords
            listWords={FilterListSearch(
              words.filter(
                (word) =>
                  removeAccent(word.nome[0]).toLowerCase() ===
                  letter.toLowerCase()
              ),
              wordSearch
            )}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
