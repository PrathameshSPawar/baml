# This file is generated by the BAML compiler.
# Do not edit this file directly.
# Instead, edit the BAML files and recompile.

# ruff: noqa: E501,F401
# flake8: noqa: E501,F401
# pylint: disable=unused-import,line-too-long
# fmt: off

from ..clients.client_azure_gpt4 import AZURE_GPT4
from ..functions.fx_booleanfunc import BAMLBooleanFunc
from baml_lib._impl.deserializer import Deserializer


# Impl: v1
# Client: AZURE_GPT4
# An implementation of .


__prompt_template = """\
Given a user is trying to schedule a meeting, extract the relevant information
{arg}
information from the query.
JSON:\
"""

__input_replacers = {
    "{arg}"
}


# We ignore the type here because baml does some type magic to make this work
# for inline SpecialForms like Optional, Union, List.
__deserializer = Deserializer[str](str)  # type: ignore






@BAMLBooleanFunc.register_impl("v1")
async def v1(arg: bool, /) -> str:
    response = await AZURE_GPT4.run_prompt_template(template=__prompt_template, replacers=__input_replacers, params=dict(arg=arg))
    deserialized = __deserializer.from_string(response.generated)
    return deserialized