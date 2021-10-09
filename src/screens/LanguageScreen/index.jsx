import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLanguage } from '../../contexts';
import {
  ListLanguages,
  ModalMod,
  TopBar,
  SearchBar,
  Filter,
} from '../../components';

export function LanguageScreen() {
  const { languages } = useLanguage();
  const [listLanguage, setListLanguage] = useState(languages);
  const [languageSearch, setLanguageSearch] = useState('');
  const [visib, setVisib] = useState(false);

  return (
    <SafeAreaView>
      <ModalMod
        list={listLanguage}
        onChange={setListLanguage}
        onChangeV={setVisib}
        visual={visib}
      />
      <View>
        <TopBar>Línguas Indígenas</TopBar>
        <View>
          <SearchBar
            placeholder="Pesquisar por uma língua"
            onChange={setLanguageSearch}
          />
          <Filter onChangeV={setVisib} />
        </View>

        <ScrollView>
          <ListLanguages
            listLanguage={listLanguage.filter((language) =>
              languageSearch === '' ||
              language.nome
                .toLowerCase()
                .substring(0, languageSearch.length) ===
                languageSearch.toLowerCase()
                ? language
                : false
            )}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
