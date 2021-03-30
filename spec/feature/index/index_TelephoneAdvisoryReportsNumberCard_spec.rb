# frozen_string_literal: true

require 'spec_helper'
require_relative '../../lib/BreadCrumbs'
require_relative '../../lib/TelephoneAdvisoryReportsNumberCard'

describe 'iPhone 6/7/8', type: :feature do
  context 'page [/]' do
    before do
      visit '/'
      page.scroll_to('.v-tabs')
      find('#app .v-tabs .v-slide-group__content a[href="#tab-1"]').click
      render_lazy_contents
      page.scroll_to('#TelephoneAdvisoryReportsNumberCard')
    end

    describe '一般相談 受付件数(TelephoneAdvisoryReportsNumberCard)' do
      it '項目の値' do
        has_telephone_advisory_reports_number_card
        has_no_breadcrumbs(id: '#TelephoneAdvisoryReportsNumberCard')
      end
    end
  end
end
