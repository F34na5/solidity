/*
	This file is part of solidity.

	solidity is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	solidity is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with solidity.  If not, see <http://www.gnu.org/licenses/>.
*/
// SPDX-License-Identifier: GPL-3.0
#pragma once

#include <libsolidity/ast/experimental/TypeSystem.h>

#include <cstdint>
#include <memory>
#include <vector>

namespace solidity::frontend
{
class SourceUnit;
class ASTNode;
}

namespace solidity::langutil
{
class ErrorReporter;
}

namespace solidity::frontend::experimental
{
class TypeSystem;

class Analysis;

namespace detail
{
template<typename Step>
struct AnnotationFetcher
{
	Analysis& analysis;
	typename Step::Annotation& get(ASTNode const& _node);
};
}

class Analysis
{
	struct AnnotationContainer;
public:
	Analysis(langutil::ErrorReporter& _errorReporter, uint64_t _maxAstId);
	Analysis(Analysis const&) = delete;
	~Analysis();
	Analysis const& operator=(Analysis const&) = delete;
	bool check(std::vector<std::shared_ptr<SourceUnit const>> const& _sourceUnits);
	langutil::ErrorReporter& errorReporter() { return m_errorReporter; }
	uint64_t maxAstId() const { return m_maxAstId; }
	TypeSystem& typeSystem() { return m_typeSystem; }
	template<typename Step>
	typename Step::Annotation& annotation(ASTNode const& _node)
	{
		return detail::AnnotationFetcher<Step>{*this}.get(_node);
	}
	AnnotationContainer& annotationContainer(ASTNode const& _node);
private:
	langutil::ErrorReporter& m_errorReporter;
	TypeSystem m_typeSystem;
	uint64_t m_maxAstId = 0;
	std::unique_ptr<AnnotationContainer[]> m_annotations;
};

}
