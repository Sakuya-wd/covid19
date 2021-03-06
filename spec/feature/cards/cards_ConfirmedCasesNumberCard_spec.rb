# frozen_string_literal: true

require 'spec_helper'
require_relative '../../lib/BreadCrumbs'
require_relative '../../lib/ConfirmedCasesNumberCard'

describe 'iPhone 6/7/8', type: :feature do
  context 'page [/cards/number-of-confirmed-cases]' do
    before do
      visit '/cards/number-of-confirmed-cases'
      render_lazy_contents
      page.scroll_to('#ConfirmedCasesNumberCard')
    end

    describe 'meta' do
      it 'title' do
        expect(title).to eq "#{JA_JSON['ConfirmedCasesNumberCard']['title']} | #{JA_JSON['Common']['岩手県']} #{JA_JSON['Common']['新型コロナウイルス感染症']}#{JA_JSON['Common']['対策サイト']}"
      end
    end

    describe '報告日別による陽性者数の推移(ConfirmedCasesNumberCard)' do
      it '項目の値' do
        has_confirmed_cases_number_card
        has_breadcrumbs(id: '#ConfirmedCasesNumberCard', title: '報告日別による陽性者数の推移')
      end
    end
  end
end
